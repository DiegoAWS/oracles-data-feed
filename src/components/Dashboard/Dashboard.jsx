import React from 'react'
import BarCharts from '../BarCharts/BarCharts'
import SmallBarChart from '../BarCharts/SmallBarChart'
import CardsContainer from '../CardsContainer/CardsContainer'
import ChartBasic from '../ChartBasic/ChartBasic'
import TabsSector from '../TabsSector/TabsSector'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>
             <div className='tabsContainer'>
            <TabsSector />
            </div>
           <div className="chartsLayout">
            <ChartBasic />
            <BarCharts />
            <SmallBarChart />
            <SmallBarChart />
            <SmallBarChart />
            <SmallBarChart />
            
           </div>
            <CardsContainer />
        </div>
    )
}

export default Dashboard