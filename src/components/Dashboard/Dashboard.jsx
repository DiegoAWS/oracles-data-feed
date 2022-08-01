import React from 'react'
import AmChartZoom from '../AmChartZoom/AmChartZoom'
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
                {/* <div className='row'>
                    <ChartBasic />
                    <BarCharts />
                </div>
                <div className='row'>
                    <SmallBarChart />
                    <SmallBarChart />
                    <SmallBarChart />
                    <SmallBarChart />
                </div> */}
                <div className='row'>
                    <AmChartZoom />
                </div>
            </div>

        </div>
    )
}

export default Dashboard