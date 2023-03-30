import React from 'react'
import { useSelector } from 'react-redux'
import MainCart from '../cart/MainCart'
import TabPanel from './TabPanle'
import VendorHeaderRight from './VendorHeaderRight'
import VendorMenu from './VendorMenu'

const TabVendorContext = ({value, vendor}) => {
  
  return (
    <TabPanel value={value} index={0}>
        <VendorMenu vendor={vendor}/>
    </TabPanel>
  )
}

export default TabVendorContext
