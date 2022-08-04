import { EventTracker } from '@devexpress/dx-react-chart';
import { Chart, SplineSeries, Title, Tooltip, ZoomAndPan } from '@devexpress/dx-react-chart-material-ui'
import { Paper } from '@mui/material'
import React, { useState } from 'react'

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

  const [viewPort, setViewPort] = useState({ argumentStart: 50, argumentEnd: 99 });

  return (
    <Paper sx={{ width: '100%', height: '500px' }}>
      <Chart data={data}>
        <Title textComponent={() => (
          <div>
            <span>Feed Updates</span>
            <span>{viewPort.argumentStart} - {viewPort.argumentEnd}</span>
          </div>
        )} position='top' />
        
        <SplineSeries name='ETH' color="#ffeb37" valueField="y" argumentField="x" />
        <ZoomAndPan viewport={viewPort} onViewportChange={setViewPort} />
        <EventTracker />
        <Tooltip contentComponent={({ text, targetItem }) => <div>
          <b>{`${targetItem?.series}`}</b>
          <hr />
          <div>{`Point: ${targetItem?.point}`}</div>
          <div>{`Value: ${text}`}</div>
        </div>
        } />
      </Chart>
    </Paper>
  )
}

export default ChartExplorer