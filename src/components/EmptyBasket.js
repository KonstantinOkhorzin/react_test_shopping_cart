import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function EmptyBasket() {
    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }} my={3}>
                THERE ARE NO ITEMS IN YOUR CART
            </Typography>
            <Link to="/">
                <Button variant="contained">CONTINUE SHOPPING</Button>
            </Link>

        </Box>
    );
}

export default EmptyBasket;