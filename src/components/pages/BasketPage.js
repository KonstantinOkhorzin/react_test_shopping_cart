import { Container} from '@mui/material';

import Basket from '../Basket';
// import EmptyBasket from '../EmptyBasket';

function BasketPage() {
    return (
        <Container maxWidth="sm">
            <Basket/>
            {/* <EmptyBasket/> */}
        </Container>
    );
}

export default BasketPage;