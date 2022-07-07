import React from 'react'
import { Label, Line, LineChart, YAxis } from 'recharts'
import { useMainContext } from '../../context/MainContext'
import './ChartBasic.scss'

function ChartBasic() {
    const { dataSet } = useMainContext()

    const currentValue = dataSet.slice(-1)[0].price?.toFixed(2)

    return (
        <div className='chartBasicWrapper'>
            <LineChart width={500} height={300} data={dataSet}>

                <YAxis yAxisId="left" dataKey="price" domain={['dataMin - 3', 'dataMax + 3']} />

                <YAxis yAxisId="right" orientation="right"  >
                    <Label value={currentValue} position="insideRight" stroke="red" />
                </YAxis>
                <Line yAxisId="left" type="monotone" dataKey="price" stroke="#8884d8" dot={false} isAnimationActive={false}/>

            </LineChart>

        </div>
    )
}

export default ChartBasic