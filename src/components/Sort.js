import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';

function Sort({ value, onChange }) {

    return (
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Sort by:</InputLabel>
            <Select
                value={value}
                onChange={e => onChange(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Sort"
            >
                <MenuItem value='name'>Name</MenuItem>
                <MenuItem value='ascending'>Price Low to High</MenuItem>
                <MenuItem value='descending'>Price High to Low</MenuItem>
                <MenuItem value='rating'>Rating</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Sort;