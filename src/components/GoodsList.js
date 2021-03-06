import { Grid } from '@mui/material';
import GoodsItem from './GoodsListItem';



const GoodsList = ({ data, addToBasket }) => {

    return (
        <Grid container spacing={2} my={2}>
            {data.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </Grid>
    );
};

export default GoodsList;