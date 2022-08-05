import { EventTracker } from '@devexpress/dx-react-chart';
import { Chart, SplineSeries, Tooltip, ZoomAndPan } from '@devexpress/dx-react-chart-material-ui'

import React, { useState } from 'react'
import { useMainContext } from '../../context/MainContext';
import './ChartExplorer.scss'

  const generateData = (n) => {
    const ret = [];
    let y = 0;
    for (let i = 0; i < n; i += 1) {
      y += Math.round(Math.random() * 10 - 5);
      ret.push({ x: i, y });
    }
    return ret;
  };
  const data = generateData(100);
function ChartExplorer() {

  const { theme } = useMainContext()
  const [viewPort, setViewPort] = useState({ argumentStart: 0, argumentEnd: 30 });



  return (

    <Chart data={data} height={250}>
      {/* <Title textComponent={() => (
          <div>
            <span>Feed Updates</span>
            <span>{viewPort.argumentStart} - {viewPort.argumentEnd}</span>
          </div>
        )} position='top' /> */}

      <SplineSeries name='Responses' color={theme?.higtlight} valueField="y" argumentField="x" />
      <ZoomAndPan viewport={viewPort} onViewportChange={setViewPort} />
      <EventTracker />
      <Tooltip contentComponent={({ text, targetItem }) => <div >

        <div>{`Responses: ${targetItem?.point}`}</div>
        <div>{`Value: ${text}`}</div>
      </div>
      } />
    </Chart>

  )
}

export default ChartExplorer