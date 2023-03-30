import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from './TabPanle';
import TabVendorContext from './TabVendorContext';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabPanleMenu({vendor}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' , bgcolor:'#fff' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="منو" {...a11yProps(0)} />
          <Tab label="درباره ما" {...a11yProps(1)} />
          <Tab label="تماس با ما" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabVendorContext value={value} vendor={vendor}/>
    </Box>
  );
}