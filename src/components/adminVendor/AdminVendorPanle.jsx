import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import { Link, useParams } from "react-router-dom"
import { useVendorAdminQuery } from '../../api/api'
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useQuery} from 'react-query'

import AdminVendorMain from './AdminVendorMain';
import MenuVendor from './MenuVendor';
import AddFoood2 from './AddFoood2';
import { useSelector } from 'react-redux';
import axios from 'axios';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    style={{width:'100%', minHeight:'70vh'}}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
         </>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AdminVendorPanle() {
  const [value, setValue] = React.useState(0);
  const [vendor, setVendor] = React.useState(null)

  const {access} = useSelector(state => state.customer)

  async function fetchVendors(){
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${access}`
      },
    };
    try{
     const data = await axios.get('http://127.0.0.1:8000/vendor/admin-vendor/',config)
      setVendor(data.data)
    }catch(error){
      console.log(error)
    }
     
  }

  React.useEffect(() => {
    fetchVendors()
  }, [])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper',}}
    >

      {vendor ?
      <>
      <Tabs
        // orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' ,paddingTop:'20px', margin:'auto', textAlign:'center' }}
      >
        <Tab label="پروفایل فروشگاه" {...a11yProps(0)} />
        <Tab label="منو" {...a11yProps(1)} />
        <Tab label="اضافه کردن غذا" {...a11yProps(2)} />
        <Tab label="سفارشات" {...a11yProps(3)} />
        <Tab label="مالی" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
     <AdminVendorMain vendor={vendor}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuVendor/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddFoood2 vendor={vendor}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
</>
      : null}
    </Box>
  );
}