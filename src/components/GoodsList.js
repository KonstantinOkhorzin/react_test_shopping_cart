import {Grid} from '@mui/material';
import GoodsItem from './GoodsItem';



const GoodsList = ({data}) => {

    return (
        <Grid container spacing={2} my={2}>
            {data.map((item) => (
                    <GoodsItem key={item.id} {...item} />
                ))}  
        </Grid>
    );
};

export default GoodsList;