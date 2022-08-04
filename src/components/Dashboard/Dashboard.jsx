import React from 'react'
import ChartExplorer from '../ChartExplorer/ChartExplorer'
// import BarCharts from '../BarCharts/BarCharts'
// import SmallBarChart from '../BarCharts/SmallBarChart'
// import ChartBasic from '../ChartBasic/ChartBasic'
import ExchangeSelector from '../ExchangeSelector/ExchangeSelector'
import TabsSector from '../TabsSector/TabsSector'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>
            <div>
                <div className="title">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div className='tabsContainer'>
                <TabsSector />
                <ExchangeSelector />
            </div>
            <div className="chartsLayout">

                <div className='row'>
                    <ChartExplorer />
                </div>


            </div>

        </div>
    )
}

export default Dashboard