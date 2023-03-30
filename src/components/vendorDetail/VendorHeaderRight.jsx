import { PinDropRounded } from '@mui/icons-material'
import { Typography, Icon } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import VendorHeaderRating from './VendorHeaderRating'

const VendorHeaderRight = ({vendor}) => {
  return (
    <Grid2 md={9}>
        <Grid2 sx={{marginTop:'20px', color:'GrayText'}} >
            <Typography variant="h4" sx={{ fontWeight:'900'}}>
            {vendor.name}
            </Typography>
        </Grid2>
        <Grid2>
            <VendorHeaderRating/>
        </Grid2>
        <Grid2 sx={{marginY:'5px', color:'GrayText'}}>
            <Grid2 display='flex'>
                <Icon><PinDropRounded/></Icon> 
                <Typography variant='subtitle2'>
                  {vendor.addresses[0].address_line1}
                </Typography>
            </Grid2>
        </Grid2>
    </Grid2>
  )
}

export default VendorHeaderRight
