import { useState } from 'react';
import { Container } from '@mui/material';

import Basket from '../Basket';
import EmptyBasket from '../EmptyBasket';

function BasketPage() {

    const [data, setData] = useState([
        {
            id: '1',
            name: 'Banana',
            poster: "https://content.silpo.ua/sku/ecommerce/3/480x480wwm/32485_480x480wwm_96440ee6-d6f0-e532-2aa7-422557c42cfc.png",
            price: 10,
            count: 1,
            sale: 0
        },
        {
            id: '2',
            name: 'Papaya',
            poster: "https://content.silpo.ua/sku/ecommerce/26/480x480wwm/267538_480x480wwm_ec6f454d-1c3f-62da-a302-8ec0073f2bed.png",
            price: 10,
            count: 1,
            sale: 5
        },
        {
            id: '3',
            name: 'Apple',
            poster: "https://content.silpo.ua/sku/ecommerce/51/480x480wwm/519745_480x480wwm_30146c35-9360-f707-494d-2fd8bf5bf619.png",
            price: 8,
            count: 1,
            sale: 0
        }
    ]);


    const onDeleteItem = (id) => {
        setData(data.filter(item => item.id !== id))
    };

    const onClearCart = () => {
        setData([])
    };

    const onIncreaseCount = (id, count) => {
        setData(data.map(item => {
            if (item.id === id) {
                return { ...item, count: (count < 99) ? count + 1 : count }
            }
            return item;
        })
        )
    };

    const onDecreaseCount = (id, count) => {
        setData(data.map(item => {
            if (item.id === id) {
                return { ...item, count: (count > 1) ? count - 1 : count }
            }
            return item;
        })
        )
    };

    return (
        <Container maxWidth="sm">
            {(data.length)
                ?
                <Basket data={data} onDeleteItem={onDeleteItem} onClearCart={onClearCart} onIncreaseCount={onIncreaseCount} onDecreaseCount={onDecreaseCount}/>
                :
                <EmptyBasket />}
        </Container>
    );
}

export default BasketPage;