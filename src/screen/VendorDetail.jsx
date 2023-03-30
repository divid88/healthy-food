import { Divider, Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import MainCart from '../components/cart/MainCart'
import HeaderVender from '../components/vendorDetail/HeaderVender'
import TabPanleMenu from '../components/vendorDetail/TabPanleMenu'
import { requestVendorDetail } from '../slice/vendorsCitySlice'
import { useEffect } from 'react'
import { LocalDiningOutlined } from '@mui/icons-material'
import { isEqual } from 'lodash'

const VendorDetail = () => {
  const {id} = useParams()
  const {status ,vendor} = useSelector(state => state.vendors)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(requestVendorDetail(id))
  },[dispatch])
  return (
    <>
    { !(isEqual(vendor, {})) ?
      <Box >
    <Grid2 container>
        <Grid2 md={9} xs={12} sx={{bgcolor:'grey.50', overflow:'hidden', borderRight:'3px solid #eee'}}>
            <HeaderVender  vendor={vendor}/>
            
            <TabPanleMenu vendor={vendor}/>
        </Grid2>

        <Grid2 md={3} sx={{display:{md:'inline-block', xs:'none'}}} >
            <MainCart />
        </Grid2>
       

    </Grid2>
    </Box> : 
  <>
  <LocalDiningOutlined/>
  </> }
  </>
  )
}

export default VendorDetail
