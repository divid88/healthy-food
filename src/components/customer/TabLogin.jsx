import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import LoginLogo from '../../assets/friends-dark.718d400c.svg'
import MainLogin from './MainLogin';
import MainRegister from './MainRegister';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabLogin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{display:'flex', width:'100%' }} component='form'>
  
      <Grid2>

    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
        borderBottom: 1, 
      borderColor: 'divider', 
      argin:'auto', 
      textAlign:'center', 
      display:'flex', 
      justifyContent:'center' }}>
        <Tabs value={value} onChange={handleChange} sx={{}} aria-label="basic tabs example">
          <Tab label="ورود" {...a11yProps(0)} />
          <Tab label="ثبت نام" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MainLogin/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MainRegister/>
      </TabPanel>

    </Box>
    </Grid2>
    </Box>
    </>
  );
}
