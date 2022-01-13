import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { goods } from './data/goods';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {

  const [data, setData] = useState(goods)
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
  const [isSnackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order))
  }, [order]);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
    setSnackOpen(true);
  };

  const onDeleteItem = (id) => {
    setOrder(order.filter(item => item.id !== id))
  };

  const onClearCart = () => {
    setOrder([])
  };

  const onIncreaseQuantity = (id, quantity) => {
    setOrder(order.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (quantity < 99) ? quantity + 1 : quantity }
      }
      return item;
    })
    )
  };

  const onDecreaseQuantity = (id, quantity) => {
    setOrder(order.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (quantity > 1) ? quantity - 1 : quantity }
      }
      return item;
    })
    )
  };

  const sortData = (sort) => {
    setSort(sort);
    switch (sort) {
      case 'name':
        return setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])));
      case 'ascending':
        return setData([...data].sort((a, b) => (a.price) - (b.price)));
      case 'descending':
        return setData([...data].sort((a, b) => (b.price) - (a.price)));
      case 'rating':
        return setData([...data].sort((a, b) => (b.rating) - (a.rating)));
      default:
        return data
    }
  }

  const searchProduct = (data, search) => {
    if (search.length === 0) {
      return data;
    }
    return data.filter(item => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const onUpdateSearch = (search) => {
    setSearch(search)
  }

  const visibleData = searchProduct(data, search);

  return (
    <Router basename='/react_test_shopping_cart'>
      <Header orderLen={order.length} />
      <Routes>
        <Route
          path="/"
          element={<MainPage
            data={visibleData}
            sort={sort}
            sortData={sortData}
            onUpdateSearch={onUpdateSearch}
            search={search}
            addToBasket={addToBasket}
            isSnackOpen={isSnackOpen}
            setSnackOpen={setSnackOpen} />} />
        <Route
          path="/basket"
          element={<BasketPage
            order={order}
            onDeleteItem={onDeleteItem}
            onClearCart={onClearCart}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity} />} />
        <Route
          path="*"
          element={< MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
