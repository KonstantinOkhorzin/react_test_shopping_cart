import { List } from '@mui/material';

import BasketListItem from './BasketListItem';


function BasketList({data, onDeleteItem}) {


    return (
        <List sx={{ width: '100%' }} >
            {data.map((item) => (
                    <BasketListItem key={item.id} {...item} onDeleteItem={() => onDeleteItem(item.id)}/>
                ))}
        </List>
    );
}

export default BasketList;