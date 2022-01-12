import { ListItem, Typography, ListItemAvatar, Avatar, Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function BasketListItem({ name, poster, price, quantity, sale, onDeleteItem, onIncreaseQuantity, onDecreaseQuantity }) {

    const calcSale = (price, quantity) => {
            return price * quantity - Math.floor(quantity / 3) * 5; 
    }
    const totalItemSale = calcSale(price, quantity);

    const style = sale && quantity > 2 ? { color: '#D32F2F' } : null;

    return (
        <ListItem
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '2px solid grey',
                flexWrap: 'wrap'
            }}>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minWidth: '135px'
                }}>
                <ListItemAvatar>
                    <Avatar alt={name} src={poster} />
                </ListItemAvatar>

                <Typography
                    variant="h6"
                    component="h2" >
                    {name}
                </Typography>
            </Box>


            <Box
                component="div"
                sx={{ display: 'flex' }}>
                <Button
                    onClick={onDecreaseQuantity}
                    size="small"
                    variant="contained"
                    sx={{ minWidth: '5px', p: '0px 10px' }}>
                    -
                </Button>
                <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{ minWidth: '30px', textAlign: 'center' }}>
                    {quantity + 'kg'}
                </Typography>

                <Button
                    onClick={onIncreaseQuantity}
                    size="small"
                    variant="contained"
                    sx={{ minWidth: '5px', p: '0px 10px' }}>
                    +
                </Button>
            </Box>

            <Typography
                style={style}
                sx={{ minWidth: '25px', textAlign: 'center' }}
                variant='subtitle2'
                component="h2">
                {(sale ? totalItemSale : price*quantity) + '$'}
            </Typography>

            <IconButton
                onClick={onDeleteItem}
                sx={{ display: 'flex', justifyContent: 'center' }}>
                <DeleteIcon
                    color="error" />
            </IconButton>
        </ListItem>
    );
}

export default BasketListItem;