import React from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'
import ChartBasic from '../ChartBasic/ChartBasic'
import './Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboardWrapper'>
           <div className="chartsLayout">
            <ChartBasic />
           </div>
            <CardsContainer />
        </div>
    )
}

export default Dashboard