
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import data from '../../data/data.json'
import './ChartBasic.scss'

function ChartBasic() {

    return (

        <LineChart
            className='chart'
            layout="horizontal"
            width={400}
            height={300}
            data={data}
            margin={0}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <YAxis axisLine={false} type="number" />
            <XAxis dataKey="month" type="category" />
            <Legend verticalAlign="top" height={36} />
            <Tooltip />
            <Line name="V1 Request" dataKey="uv" stroke="#a4a6ec" />
            <Line name="V2 Request" dataKey="pv" stroke="#c981aa" />
        </LineChart>

    )
}

export default ChartBasic