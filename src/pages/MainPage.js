import { useState } from 'react';
import { Container, Typography } from '@mui/material';

import { goods } from '../data/goods';
import GoodsList from '../components/GoodsList';
import SearchAndSortPanel from '../components/SearchAndSortPanel';
import Snack from '../components/Snack';

function MainPage() {
    const [data, setData] = useState(goods)
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState([]);
    const [isSnackOpen, setSnackOpen] = useState(false);

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
        console.log('searchProduct');
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




    return (
        <>
            <Container maxWidth="md">
                <SearchAndSortPanel
                    onUpdateSearch={onUpdateSearch}
                    value={sort}
                    onChange={sortData} />
                {visibleData.length
                    ?
                    <GoodsList
                        data={visibleData}
                        addToBasket={addToBasket} />
                    :
                    <Typography variant="h4" component="div" mt={5} textAlign={'center'}>
                        No results are found for “{search}”.
                    </Typography>
                }
            </Container>
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)} />
        </>
    );
}

export default MainPage;