import { Box, Typography, Grid, Button } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import BasketList from './BasketList';

function Basket({ order, onDeleteItem, onClearCart, onIncreaseQuantity, onDecreaseQuantity }) {
    return (
        <>
            <Grid container spacing={2} my={1}>
                <Grid item xs={6}>
                    <Typography variant="h3" component="h1">
                        Cart
                    </Typography>
                </Grid>
                <Grid
                    item xs={6}
                    sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <Button
                        onClick={onClearCart}
                        variant="outlined"
                        color="error"
                        endIcon={<RemoveShoppingCartIcon />}>
                        Clear cart
                    </Button>
                </Grid>
            </Grid>
            <Box
                component="div"
                sx={{ border: '2px solid grey', borderRadius: '5px' }}>
                <BasketList 
                    order={order} 
                    onDeleteItem={onDeleteItem} 
                    onIncreaseQuantity={onIncreaseQuantity} 
                    onDecreaseQuantity={onDecreaseQuantity} />
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', p: '10px 0' }}>
                    ORDER TOTAL:{' '}
                    {order.reduce((acc, item) => {
                        const { price, quantity, sale } = item;
                        const totalItemSale = price * quantity - Math.floor(quantity / 3) * 5;
                        return acc + (sale ? totalItemSale : price * quantity);
                    }, 0)}$
                </Typography>
            </Box>
        </>
    );
}

export default Basket;