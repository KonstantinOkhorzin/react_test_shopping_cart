import { useState } from 'react';
import { Container } from '@mui/material';

import GoodsList from '../GoodsList';
import { goods } from '../../data/goods';
import SearchAndSortPanel from '../SearchAndSortPanel';

function MainPage() {
    const [data, setData] = useState(goods)
    const [selectedSort, setSelectedSort] = useState('');
    const [search, setSearch] = useState('');

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

    const searchProduct = (data, search) => {
        if (search.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
    }

    const onUpdateSearch = (search) => {
        setSearch(search)
    }

    const visibleData = searchProduct(data, search);

    return (
        <Container maxWidth="md">
            <SearchAndSortPanel
                onUpdateSearch={onUpdateSearch}
                value={selectedSort}
                onChange={sortData} />
            <GoodsList
                data={visibleData} />
        </Container>
    );
}

export default MainPage;