import React from 'react'
import BarCharts from '../BarCharts/BarCharts'
import SmallBarChart from '../BarCharts/SmallBarChart'
import ChartBasic from '../ChartBasic/ChartBasic'
import ExchangeSelector from '../ExchangeSelector/ExchangeSelector'
import TabsSector from '../TabsSector/TabsSector'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>
             <div className='tabsContainer'>
            <TabsSector />
            <ExchangeSelector />
            </div>
           <div className="chartsLayout">
            <ChartBasic />
            <BarCharts />
            <SmallBarChart />
            <SmallBarChart />
            <SmallBarChart />
            <SmallBarChart />
            
           </div>
           
        </div>
    )
}

export default Dashboard