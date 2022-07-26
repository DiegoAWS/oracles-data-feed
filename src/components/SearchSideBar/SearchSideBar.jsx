
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import { CircularProgress, TextField } from '@mui/material'
// import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material';
import React from 'react'
import { getPricesList } from '../../adapters/processPrices';
import { useMainContext } from '../../context/MainContext'
import CurrencyCardItem from '../CardsContainer/CurrencyCardItem/CurrencyCardItem';
import './SearchSideBar.scss'

function SearchSideBar() {
    const { toggleSearchBar, prices } = useMainContext()

    const list = getPricesList(prices)

    return (
        <div className='searchSideBarWrapper' onClick={toggleSearchBar}>
            <div className='searchSideBar' onClick={e => { e.stopPropagation() }}>

                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FilterAltIcon color="action" sx={{ mr: 1, my: 0.5 }} />
                    <TextField label="Filter" variant="outlined" fullWidth />
                </Box> */}

                <div className='searchSideBarContent'>

                    {list.length === 0 ?
                        <div className='centerProgress'><CircularProgress /></div>
                        : list.map((element, i) => (
                            <div key={i}>
                                <CurrencyCardItem element={element} />
                            </div>))}

                </div>
            </div>
        </div>
    )
}

export default SearchSideBar