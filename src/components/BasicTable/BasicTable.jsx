import React from 'react'
import { getPricesArray } from '../../adapters/processPrices'
import { useMainContext } from '../../context/MainContext'
import './BasicTable.scss'

const getColumn = (element, target) => {
    return element.find(item => item.quote === target)?.price || ""
}
function BasicTable() {
    const { prices } = useMainContext()


    const tailDataSet = getPricesArray(prices)


    return (
        <div className='basicTableWrapper'>
            <table className=''>
                <thead>
                    <tr>
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
                            <td>{element[0]?.baseName}</td>
                            <td>{element[0]?.base}</td>
                            <td>{getColumn(element, "usdt")}</td>
                            <td>{getColumn(element, "eth")}</td>
                            <td>{getColumn(element, "usd")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BasicTable