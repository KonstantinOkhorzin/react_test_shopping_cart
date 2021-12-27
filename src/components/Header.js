import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">Main</Link> 
                </Typography >
                <IconButton color='inherit'>
                    <Badge 
                        color="secondary"
                    >
                        <Link to="/basket"><ShoppingCartIcon/></Link> 
                    </Badge> 
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;