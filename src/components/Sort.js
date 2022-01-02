import { useState } from 'react';
import {FormControl, MenuItem, Select, InputLabel } from '@mui/material';

function Sort() {

    const [age, setAge] = useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
      };

    return (
        <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-standard-label">Sort:</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Sort"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
    );
}

export default Sort;