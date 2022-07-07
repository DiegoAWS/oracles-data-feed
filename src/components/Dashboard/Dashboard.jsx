import React from 'react'
import BasicTable from '../BasicTable/BasicTable'
import ChartArea from '../ChartArea/ChartArea'
import ChartBasic from '../ChartBasic/ChartBasic'
import FuturisticSpinner from '../FuturisticSpinner/FuturisticSpinner'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>
            <ChartBasic />
            <BasicTable />
            <FuturisticSpinner />
            <ChartArea />
        </div>
    )
}

export default Dashboard