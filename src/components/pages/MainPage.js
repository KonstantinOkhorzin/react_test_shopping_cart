import { useState } from 'react';
import { Container } from '@mui/material';

import GoodsList from '../GoodsList';
import { goods } from '../../data/goods';
import SearchAndSortPanel from '../SearchAndSortPanel';

function MainPage() {
    const [data, setData] = useState(goods)
    const [selectedSort, setSelectedSort] = useState('');

    const sortData = (sort) => {
        setSelectedSort(sort);
        switch (sort) {
            case 'name':
                return setData([...data].sort((a, b) => a[sort].localeCompare(b[sort])));
            case 'ascending':
                return setData([...data].sort((a, b) => (a.price) - (b.price)));
            case 'descending':
                return setData([...data].sort((a, b) => (b.price) - (a.price)));
            case 'rating':
                return setData([...data].sort((a, b) => (b.rating) - (a.rating)));
            default:
                return data
        }
    }

    return (
        <Container maxWidth="md">
            <SearchAndSortPanel
                value={selectedSort}
                onChange={sortData} />
            <GoodsList
                data={data} />
        </Container>
    );
}

export default MainPage;