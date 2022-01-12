import { Container, Typography } from '@mui/material';

import GoodsList from '../components/GoodsList';
import SearchAndSortPanel from '../components/SearchAndSortPanel';
import Snack from '../components/Snack';

function MainPage({data, sort, sortData, onUpdateSearch, search, addToBasket, isSnackOpen, setSnackOpen}) {

    return (
        <>
            <Container maxWidth="md">
                <SearchAndSortPanel
                    onUpdateSearch={onUpdateSearch}
                    value={sort}
                    onChange={sortData} />
                {data.length
                    ?
                    <GoodsList
                        data={data}
                        addToBasket={addToBasket} />
                    :
                    <Typography variant="h4" component="div" mt={5} textAlign={'center'}>
                        No results are found for “{search}”.
                    </Typography>
                }
            </Container>
            <Snack
                isOpen={isSnackOpen}
                handleClose={() => setSnackOpen(false)} />
        </>
    );
}

export default MainPage;