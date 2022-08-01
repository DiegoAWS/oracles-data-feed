import React from 'react'
import { Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import ExchangeSelector from '../components/ExchangeSelector/ExchangeSelector'
import TabsSector from '../components/TabsSector/TabsSector'
import './RatePage.scss'

import data from '../data/data.json'

function RatePage() {

    const onUpdateBrush = (e) => {
        console.log(e)
    }

    return (
        <div className='ratePageWrapper'>
            <div className='tabsContainer'>
                <TabsSector />
                <ExchangeSelector />
            </div>
            <div className="chartsLayout">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 25,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Brush  onChange={onUpdateBrush}/>
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        <Line type="natural" dataKey="amt" stroke="red" />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 25,
                            right: 30,
                            left: 20,
                            bottom: 25,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Brush />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        <Line type="natural" dataKey="amt" stroke="red" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default RatePage