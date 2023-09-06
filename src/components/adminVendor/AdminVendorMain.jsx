import React, {useEffect} from 'react'

import { Box } from '@mui/material'

import AdminHeaderVender from './AdminHeaderVendor'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import UpdateHeaderVendor from './UpdateHeaderVendor'

const AdminVendorMain = ({vendor}) => {
  
 

  return (
    <>



    {vendor &&
     <Box >
     <Grid2 container>
         <Grid2 md={9} xs={12} 
               sx={{
                 bgcolor:'grey.50',
                  overflow:'hidden', 
                  borderRight:'3px solid #eee'
                  }}>
  <AdminHeaderVender vendor={vendor}/>
  </Grid2>

  <Grid2 md={3} sx={{display:{md:'inline-block', xs:'none'}}} >
         <UpdateHeaderVendor/>
        </Grid2>
       

    </Grid2>
    </Box>
    }
    </>
  )
}

export default AdminVendorMain