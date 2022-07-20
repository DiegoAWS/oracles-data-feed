import React from 'react'
import data from '../../data/data.json'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import './GenericChart.scss'

const CommonComponents = () => {

    return (
        <>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" type="category" />
            <YAxis axisLine={false} type="number" />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
        </>
    )
}

const commonChartProps = {
    className: 'chart',
    layout: "horizontal",
    width: 400,
    height: 300,
    data: data,
    margin: 0,
}

function GenericChart({ title, subTitle, children, type = 'barChart' }) {
    return (
        <div className='genericChartWrapper'>
            <div className='chartTitle'>{title}</div>
            <div className='boldSubtitle'>{subTitle}</div>

            {type === 'barChart' &&
                <BarChart
                    barSize={8}
                    barCategoryGap={12}
                    {...commonChartProps}
                >
                    <CommonComponents />

                    <Bar name="VRF Request" dataKey="pv" fill="#a4a6ec" />
                    <Bar name="VRF Fullfilled" dataKey="uv" fill="#7f5eba" />
                    <>
                        {children}
                    </>
                </BarChart>
            }
            
        </div>
    )
}

export default GenericChart
