import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Rating, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const GoodsListItem = ({ poster, price, name, rating, quantity, id, sale, addToBasket }) => {

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
                    sx={{ objectFit: "contain" }}
                />
                <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box component="div">
                        <Typography
                            variant="h6"
                            component="h3" >
                            {name}
                        </Typography>
                        <Typography variant="body1">Price: {price}$</Typography>
                    </Box>
                    <Box component="div" pt={"5px"}>
                        <Rating value={rating} readOnly precision={0.5} />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => addToBasket({ poster, price, name, id, sale, quantity })}
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}>
                        add to cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsListItem;