import { Autocomplete, TextField } from '@mui/material'
import { sortBy } from 'lodash'
import React from 'react'
import { useMainContext } from '../../context/MainContext'
import './ExchangeSelector.scss'
function ExchangeSelector() {

    const { exchange, exchangeList, setExchange } = useMainContext()

    const handleChange = (_,value) => {
        setExchange(value)
    }

    return (
        <div className='exchangeSelectorWrapper'>
            <Autocomplete
                disablePortal
                clearIcon={null}
                getOptionLabel={(option) => option.name}
                value={exchange}
                onChange={handleChange}
                options={sortBy(exchangeList,'symbol')}
                renderInput={(params) => <TextField {...params} label='Exchange' variant='outlined' />}
                sx={{ width: 300 }}


            />
        </div>
    )
}

export default ExchangeSelector