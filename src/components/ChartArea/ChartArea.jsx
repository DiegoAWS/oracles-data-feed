import React from 'react'
import { Area, AreaChart, XAxis } from 'recharts'
import { useMainContext } from '../../context/MainContext'
import './ChartArea.scss'

function ChartArea() {
    const { dataSet } = useMainContext()
    return (
        <div className='chartAreaWrapper'>

            <AreaChart width={500} height={300} data={dataSet}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>

                </defs>
                <XAxis dataKey={[]}/>

                <Area type="monotone" dataKey="amountQuoteStr" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"
                    dot={false}
                />
            </AreaChart>

        </div>
    )
}

export default ChartArea