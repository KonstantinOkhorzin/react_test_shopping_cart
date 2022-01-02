
import { Container } from '@mui/material';

import GoodsList from '../GoodsList';
import { goods } from '../../data/goods';
import SearchAndSortPanel from '../SearchAndSortPanel';

function MainPage() {

    return (
        <Container maxWidth="md">
            <SearchAndSortPanel/>
            <GoodsList data={goods} />
        </Container>
    );
}

export default MainPage;