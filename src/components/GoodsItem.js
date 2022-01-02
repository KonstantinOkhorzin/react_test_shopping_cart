import {Grid, Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const GoodsItem = ({poster, price, name}) => {
    
    return (
        <Grid item xs={12} sm={6} md={4}  >
            <Card 
            sx={{
                height: '100%'
            }}>
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    height="150"
                    sx={{objectFit: "contain"}}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3" >
                        {name}
                    </Typography>
                    <Typography variant="body1">Price: {price}$</Typography>
                    </CardContent>
                    <CardActions>
                    <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                    add to cart
                    </Button>
                    </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;