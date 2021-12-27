import { List, Divider } from '@mui/material';
import apple from '../resources/img/apple.png';
import banana from '../resources/img/banana.png';
import kiwi from '../resources/img/kiwi.png';

import BasketItem from './BasketItem';


function BasketList() {


    return (
        <List sx={{ width: '100%' }} >
            <BasketItem key={1} poster={apple} />
            <Divider />
            <BasketItem key={2} poster={banana} />
            <Divider />
            <BasketItem key={3} poster={kiwi} />
            <Divider />
        </List>
    );
}

export default BasketList;