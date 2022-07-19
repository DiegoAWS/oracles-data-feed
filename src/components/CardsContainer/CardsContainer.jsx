import React from 'react'
import './CardsContainer.scss'

import { getPricesList } from '../../adapters/processPrices'
import { useMainContext } from '../../context/MainContext'
import CurrencyCardItem from './CurrencyCardItem/CurrencyCardItem'
import { CircularProgress } from '@mui/material'

function CardsContainer() {
    const { prices } = useMainContext()
    const list = getPricesList(prices)

    return (
        <div className='cardsContainerWrapper'>
            <div className="cardsTitle">
                Our price signals
            </div>
            <div className="cardsSubtitle">
                Our price signals are calculated in realtime regularly and automatically in accordance with network price submission requirements. Here are the price signals we have submitted for the previous 3 minute epoch.
            </div>

            <div className='cardsContainer'>
                {list.length === 0 ?
                    <div className='centerProgress'><CircularProgress /></div>
                    : list.map((element, i) => (
                        <div key={i}>
                            <CurrencyCardItem element={element} />
                        </div>))}
            </div>
        </div>
    )
}

export default CardsContainer