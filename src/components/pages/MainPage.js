import {Container} from '@mui/material';

import GoodsList from '../GoodsList';
import {goods} from '../../data/goods';

function MainPage() {
    return (
        <Container maxWidth="md">
           <GoodsList data={goods}/>
        </Container>
    );
}

export default MainPage;