import React from 'react'
import BasicTable from '../BasicTable/BasicTable'
import ChartArea from '../ChartArea/ChartArea'
import ChartBasic from '../ChartBasic/ChartBasic'
import FuturisticSpinner from '../FuturisticSpinner/FuturisticSpinner'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>

            <FuturisticSpinner />
            <ChartBasic />
            <ChartArea />
            <BasicTable />
        </div>
    )
}

export default Dashboard