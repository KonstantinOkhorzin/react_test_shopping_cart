import { Container } from '@mui/material';

import Basket from '../components/Basket';
import EmptyBasket from '../components/EmptyBasket';

function BasketPage({order, onDeleteItem, onClearCart, onIncreaseQuantity, onDecreaseQuantity}) {

    return (
        <Container maxWidth="sm">
            {(order.length)
                ?
                <Basket order={order} onDeleteItem={onDeleteItem} onClearCart={onClearCart} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity}/>
                :
                <EmptyBasket />}
        </Container>
    );
}

export default BasketPage;