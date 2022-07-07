import React from 'react'
import { useMainContext } from '../../context/MainContext'
import './BasicTable.scss'

function BasicTable() {
    const { dataSet } = useMainContext()

    const tailDataSet = dataSet.slice(-10)

    return (
        <div className='basicTableWrapper'>BasicTable</div>
    )
}

export default BasicTable