import React from 'react'
import './CurrencyCardItem.scss'
import { getCurrencyLogoUrl } from '../../../services/getCurrencyLogo'

const CurrencyCardItem = ({ element }) => {
    return (
        <div className='currencyCardItem'>
            <div className='cardTopRow'>
                <object data={getCurrencyLogoUrl(element?.base)} type="image/png" className='logoCurrency'>
                    <img src={getCurrencyLogoUrl("generic")}
                        alt={element?.base}
                        className='logoCurrency'
                    />
                </object>
                <div className="currencyNames">
                    {`${element?.base?.toUpperCase()} / ${element?.quote?.toUpperCase()}`}
                </div>
            </div>
            <div className='cardBottomRow'>
                <div className='cardBottomRowLeft'>
                    Price
                </div>
                <div className="cardValue">
                    {`${element?.price} $`}
                </div>
            </div>
        </div>
    )
}

export default CurrencyCardItem