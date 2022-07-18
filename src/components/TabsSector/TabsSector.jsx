import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

function TabsSector() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event, newValue) => {
    console.log({ newValue })
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} >
            <Tab label="1h" />
            <Tab label="24h" />
            <Tab label="7d" />
          </Tabs>
        </Box>

      </Box>

    </div>
  )
}

export default TabsSector