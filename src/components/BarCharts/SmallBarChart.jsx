import React from 'react'
import data from '../../data/data.json'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import './BarCharts.scss'
import { shuffle } from 'lodash'

function SmallBarChart() {

    return (
        <div className='barChartsWrapper'>
           
            <BarChart
                className='barChart'
                width={180}
                height={150}
                data={shuffle(data)}
                barSize={8}
                barCategoryGap={12}
                margin={0}
            >

                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" type="category" />
                <YAxis axisLine={false} type="number" />
                <Tooltip />
               
                <Bar name="VRF Request" dataKey="pv" fill="#a4a6ec" />
                <Bar name="VRF Fullfilled" dataKey="uv" fill="#7f5eba" />
            </BarChart>
        </div>
    )
}

export default SmallBarChart