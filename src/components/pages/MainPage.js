import {Container} from '@mui/material';

import GoodsList from '../GoodsList';
import {goods} from '../../data/goods';

function Main() {
    return (
        <Container maxWidth="md">
           <GoodsList data={goods}/>
        </Container>
    );
}

export default Main;