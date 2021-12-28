import { ListItem, Typography, ListItemAvatar, Avatar, Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function BasketListItem({name, poster, price, count, onDeleteItem}) {
    return (
        <ListItem
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '2px solid grey'
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
                sx={{ display: 'flex'}}>
                <Button
                    size="small"
                    variant="contained"
                    sx={{ minWidth: '5px',  p: '0px 10px' }}>
                    -
                </Button>
                <Typography
                    variant="subtitle2"
                    component="div" 
                    sx={{ minWidth: '30px',textAlign: 'center' }}>
                    {count + 'kg'}
                </Typography>
                
                <Button
                    size="small"
                    variant="contained"
                    sx={{ minWidth: '5px',  p: '0px 10px' }}>
                    +
                </Button>
            </Box>

            <Typography
                sx={{ minWidth: '25px', textAlign: 'center'}}
                variant='subtitle2'
                component="h2">
                {price + '$'}
            </Typography>

            <IconButton 
                onClick={onDeleteItem}
                sx={{ display:'flex', justifyContent: 'center' }}>
                <DeleteIcon
                color="error"/>
            </IconButton>
        </ListItem>
    );
}

export default BasketListItem;