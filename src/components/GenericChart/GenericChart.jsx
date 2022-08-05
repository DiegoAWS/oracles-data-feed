import React from 'react'
import data from '../../data/data.json'
import { Bar, BarChart, CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './GenericChart.scss'
import { Line } from '@amcharts/amcharts5'
import ChartExplorer from '../ChartExplorer/ChartExplorer'
import CustomPieChart from './CustomPieChart'

const CommonComponents = ({ lineChart }) => {

    return (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            {lineChart ? <XAxis dataKey="name" /> : <XAxis dataKey="month" type="category" />}
            <YAxis axisLine={false} type="number" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
        </>
    )
}

const commonChartProps = {
    className: 'chart',
    layout: "horizontal",
    data: data,
    margin: 0,
}


function GenericChart({ title, subTitle, children, type = 'barChart' }) {
    return (
        <div className='genericChartWrapper'>
            <div className='chartTitle'>{title}</div>
            <div className='boldSubtitle'>{subTitle}</div>
            <ResponsiveContainer width="100%" height={250}>

                {
                    type === 'explorer' ? (
                        <ChartExplorer />
                    ) :
                    type === 'pie' ? (
                        <CustomPieChart />
                    ) :
                        type === 'barChart' ?
                            <BarChart
                                barSize={12}
                                barCategoryGap={8}
                                {...commonChartProps}
                            >
                                <CommonComponents />

                                <Bar name="VRF Request" dataKey="pv" fill="#a4a6ec" />
                                <Bar name="VRF Fullfilled" dataKey="uv" fill="#7f5eba" />
                                <>  {children}  </>
                            </BarChart>
                            :
                            type === 'lineChart' ?
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                                : null
                }
            </ResponsiveContainer>

        </div>
    )
}

export default GenericChart
