import React from 'react'
import { useMainContext } from '../../context/MainContext'
import './BasicTable.scss'

function BasicTable() {
    const { dataSet } = useMainContext()

    const tailDataSet = dataSet.slice(-14)

    return (
        <div className='basicTableWrapper'>
              <div  className='basicTableRow basicTableHeader'>
                        <div className='basicTableCell'>PRICE</div>
                        <div className='basicTableCell'>QUOTE</div>
                        <div className='basicTableCell'>AMOUNT</div>

                    </div>
            {
                tailDataSet.map((item, index) => (
                    <div key={index} className={`basicTableRow ${item?.orderSide==="BUYSIDE"?"BUYSIDE":""}`} >
                        <div className='basicTableCell'>{item?.price?.toFixed(2)}</div>
                        <div className='basicTableCell'>{item?.amountQuoteStr?.toFixed(2)}</div>
                        <div className='basicTableCell'>{item?.amountStr?.toFixed(2)}</div>

                    </div>
                ))
            }
        </div>
    )
}

export default BasicTable