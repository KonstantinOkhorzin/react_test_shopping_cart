import { List } from '@mui/material';

import BasketListItem from './BasketListItem';


function BasketList({data, onDeleteItem, onIncreaseQuantity, onDecreaseQuantity}) {


    return (
        <List sx={{ width: '100%' }} >
            {data.map((item) => (
                    <BasketListItem 
                        key={item.id} 
                        {...item} 
                        onDeleteItem={() => onDeleteItem(item.id)} 
                        onIncreaseQuantity={() => onIncreaseQuantity(item.id, item.quantity)}
                        onDecreaseQuantity={() => onDecreaseQuantity(item.id, item.quantity)}/>
                ))}
        </List>
    );
}

export default BasketList;