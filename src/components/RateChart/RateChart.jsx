import React, { useState } from 'react'
import './RateChart.scss'

import { format } from "d3-format";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {  CandlestickSeries, } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { CrossHairCursor, MouseCoordinateY } from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";
import { useMainContext } from '../../context/MainContext';


function RateChart({ data: initialData, width, ratio = 2 }) {

    const { theme } = useMainContext()
    const [sufix, setSufix] = useState(1)

    const handleReset = () => {
        setSufix(oldSufix => oldSufix + 1)
    }


    const xScaleProvider = discontinuousTimeScaleProvider
        .inputDateAccessor(d => d.date);
    const {
        data,
        xScale,
        xAccessor,
        displayXAccessor,
    } = xScaleProvider(initialData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 150)]);
    const xExtents = [start, end];

    const margin = { left: 70, right: 70, top: 20, bottom: 30 };

    const height = 500;

    const gridHeight = height - margin.top - margin.bottom;
    const gridWidth = width - margin.left - margin.right;

    const yGrid =  { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 } 
    const xGrid = { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 } 

  

    return (
        <ChartCanvas height={500}
            ratio={ratio}
            width={width}
            margin={{ left: 70, right: 70, top: 10, bottom: 30 }}

            mouseMoveEvent={true}
            panEvent={true}
            zoomEvent={true}
            clamp={false}
            type={'svg'}
            seriesName={`MSFT_${sufix}`}
            data={data}
            xScale={xScale}
            xExtents={xExtents}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
        >

            <Chart id={1}
                yExtents={d => [d.high, d.low]}
            >
                <XAxis axisAt="bottom"
                    orient="bottom"
                    zoomEnabled={true}

                    {...xGrid} />
                <YAxis axisAt="right"
                    orient="right"
                    ticks={5}
                    zoomEnabled={true}
                    {...yGrid}
                />

                <MouseCoordinateY
                    at="right"
                    orient="right"
                    displayFormat={format(".2f")} />

                <CandlestickSeries />
                <OHLCTooltip origin={[0, 0]} />
                <ZoomButtons
                    onReset={handleReset}
                />
            </Chart>
            <CrossHairCursor />
        </ChartCanvas>
    );

}

export default fitWidth(RateChart)