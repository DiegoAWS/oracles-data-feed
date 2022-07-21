
import React from 'react'
import data from '../../data/data.json'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import './BarCharts.scss'

function BarCharts() {
    return (
        <div className='barChartsWrapper'>
            VRF Requests vs Requests Fulfilled
        <BarChart
            className='barChart'
            width={400}
            height={300}
            data={data}
            barSize={8}
            barCategoryGap={12}
            margin={0}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" type="category" />
            <YAxis axisLine={false} type="number" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar name="VRF Request" dataKey="pv" fill="#a4a6ec" />
            <Bar name="VRF Fullfilled" dataKey="uv" fill="#7f5eba" />
        </BarChart>
        </div>
    )
}

export default BarCharts