import { useState } from 'react';
import { TextField} from '@mui/material';

function Search(props) {

    const [search, setSearch] = useState('');

    const onUpdateSearch = (e) => {
        const userValue = e.target.value;
        setSearch(userValue)
        props.onUpdateSearch(userValue)
    }

    return (
        <>
            <TextField 
                value={search}
                onChange={onUpdateSearch}
                id="standard-basic" 
                label="Search:" 
                variant="standard" 
                fullWidth />
        </>
    );
}

export default Search;