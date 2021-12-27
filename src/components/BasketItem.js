import { ListItemIcon, ListItem, Typography, ListItemAvatar, Avatar, Box, Button } from '@mui/material';
import { Close } from "@mui/icons-material";


function BasketItem({ poster }) {
    return (
        <ListItem
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <ListItemAvatar>
                    <Avatar alt="apple" src={poster} />
                </ListItemAvatar>

                <Typography
                    variant="h6"
                    component="h2" >
                    Apple
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
                    sx={{ minWidth: '20px',textAlign: 'center' }}>
                    1
                </Typography>
                <Typography
                    sx={{ p: '0 2px'}}
                    variant="subtitle2"
                    component="span" >
                    kg
                </Typography>
                <Button
                    size="small"
                    variant="contained"
                    sx={{ minWidth: '5px',  p: '0px 10px' }}>
                    +
                </Button>
            </Box>

            <Typography
                variant='subtitle2'
                component="h2" >
                10$
            </Typography>

            <ListItemIcon 
            sx={{ display:'flex', justifyContent: 'center' }}>
                <Close />
            </ListItemIcon>
        </ListItem>
    );
}

export default BasketItem;