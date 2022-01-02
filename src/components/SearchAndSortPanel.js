
import { Grid } from '@mui/material';

import Sort from '../components/Sort';
import Search from '../components/Search';

function SearchAndSortPanel() {

    return (
        <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={6}>
                <Search/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Sort/>
            </Grid>
        </Grid>
    );
}

export default SearchAndSortPanel;