import { CircularProgress } from '@mui/material'
import React from 'react'
import { getPricesArray } from '../../adapters/processPrices'
import { useMainContext } from '../../context/MainContext'
import { getCurrencyLogoUrl } from '../../services/getCurrencyLogo'
import './BasicTable.scss'

const getColumn = (element, target) => {
    return element.find(item => item.quote === target)?.price || ""
}
function BasicTable() {
    const { prices } = useMainContext()

    const tailDataSet = getPricesArray(prices)

    console.log({ prices })
    return (
        <div className='basicTableWrapper'>
            {tailDataSet.length === 0 ?
                <CircularProgress />
                : <table className=''>
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Currency</th>
                            <th>Symbol</th>
                            <th>USDT</th>
                            <th>ETH</th>
                            <th>USD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tailDataSet.map((element, i) => (
                            <tr key={i}>
                                <td className='logoContainer'>
                                    <object data={getCurrencyLogoUrl(element[0]?.base)} type="image/png" className='logoCurrency'>
                                        <img src={getCurrencyLogoUrl("generic")}
                                            alt={element[0]?.base}
                                            className='logoCurrency'
                                        />
                                    </object>


                                </td>
                                <td>{element[0]?.baseName}</td>
                                <td>{element[0]?.base}</td>
                                <td>{getColumn(element, "usdt")}</td>
                                <td>{getColumn(element, "eth")}</td>
                                <td>{getColumn(element, "usd")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div>
    )
}

export default BasicTable