import { List } from '@mui/material';

import BasketListItem from './BasketListItem';


function BasketList({data, onDeleteItem, onIncreaseCount, onDecreaseCount}) {


    return (
        <List sx={{ width: '100%' }} >
            {data.map((item) => (
                    <BasketListItem 
                        key={item.id} 
                        {...item} 
                        onDeleteItem={() => onDeleteItem(item.id)} 
                        onIncreaseCount={() => onIncreaseCount(item.id, item.count)}
                        onDecreaseCount={() => onDecreaseCount(item.id, item.count)}/>
                ))}
        </List>
    );
}

export default BasketList;