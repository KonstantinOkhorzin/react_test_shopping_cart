import {Box, Typography, Grid, Button } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import BasketList from './BasketList';

function Basket() {
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
                        variant="outlined"
                        color="error"
                        endIcon={<RemoveShoppingCartIcon />}>
                        Clear cart
                    </Button>
                </Grid>
            </Grid>
            <Box
                component="div"
                sx={{ border: '1px solid grey', borderRadius: '5px' }}>
                <BasketList />
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center', p: '10px 0' }}>
                    ORDER TOTAL: 30$
                </Typography>
            </Box>
        </>
    );
}

export default Basket;