import { Grid } from '@mui/material';

import Sort from '../components/Sort';
import Search from '../components/Search';

function SearchAndSortPanel({value, onChange, onUpdateSearch}) {

    return (
        <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={6}>
                <Search
                    onUpdateSearch={onUpdateSearch}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Sort
                    value={value}
                    onChange={onChange}/>
            </Grid>
        </Grid>
    );
}

export default SearchAndSortPanel;