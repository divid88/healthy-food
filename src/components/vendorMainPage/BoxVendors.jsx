import { CardMedia, Box, Typography, Card } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from "react-router-dom";

import SearchSorting from '../searchSorting/SearchSorting'
import BannerImage from '../../assets/image/healthy_banner.jpg'
import SummeryVendor from './SummeryVendor'
import { useGetVendorsCitiesQuery } from '../../api/api'
import Category from './Category';

const BoxVendors = () => {
  const {city} = useSelector(state => state.location)

  let [searchParams, setSearchParams] = useSearchParams();
  const {favorites} = useSelector(state => state.customer)
  const {data: vendors, isSuccess, isLoading, isError} = useGetVendorsCitiesQuery(city) 
  const listFavoritesId = favorites.map(f => f.vendor)
  let search = ''
  let order = 0

 
  return (
    <>
     

<SearchSorting/> 
<Grid2 container>
<Grid2 md={11} xs={11} sx={{margin:'auto',display:{xs:'none', md:'block'}, overflow:'hidden'}}>
  <Card 
  sx={{
    width:'100%',
    height:'400px', 
    margin:'20px', 
    position:'relative',
    boxShadow:'5',

    overflow:'hidden'
    }}>
  <CardMedia component='img' alt='bannerImage' src={BannerImage} 
  sx={{
    width:'100%', 
    height:'100%',
    overflow:'hidden',
  }} />

<Box
sx={{
       
       position: 'absolute',
        top:0,
        right:0,
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 10, 0, 0.24)',
        color: 'white',
        padding: '10px',
      }}
    >
      <Grid2 container>
        <Grid2 md={6}>

        </Grid2>
        <Grid2 md={6} >
          <Typography 
          sx={{
            fontWeight:'1000', 
            margin:'80px 50px', 
            lineHeight:2, 
            textShadow:'4',
            color:'grey.100',
            textAlign:'center'
            }} variant='h3'>
            بخورید و بیاشامید 
            <br/>
            فقط
            <br/>
             جفتک نندازید!!!!
          </Typography>
        </Grid2>
      </Grid2>

    </Box>
  </Card>
</Grid2>
</Grid2>

{/* {listFavoritesId.length > 0 && 

<Grid2 container display='flex' sx={{padding:'20px', justifyContent:'center'}}>
        <Grid2 md={11} >
            <Typography variant='h5' sx={{color:'GrayText'}}>
                رستوران ها مورد علاقه شما
                </Typography>
        </Grid2>
        
        <Grid2 container md={12} xs={12} display="flex" sx={{marginY: '10px'}} spacing={1} >
            { vendors.map(vendor => ( <>
              { listFavoritesId.includes(vendor.id) &&
              <Grid2 md={4} xs={12} key={vendor.id}><SummeryVendor vendor={vendor}/></Grid2>
              }
              </>
            ))
            } 
      

        </Grid2>
    
    </Grid2>
} */}

<Category/>

 
    <Grid2 container display='flex' sx={{padding:'20px', justifyContent:'center'}}>
        
        <Grid2 md={11} >
            <Typography variant='h5' sx={{color:'GrayText'}}>
                رستوران ها در محدوده
                </Typography>
        </Grid2>
        
        <Grid2 container md={11} xs={12} display="flex" sx={{marginY: '10px'}} spacing={1} >
        {isSuccess? <> { vendors.map(vendor => (
              <Grid2 md={4} xs={12} key={vendor.id}><SummeryVendor vendor={vendor}/>
              </Grid2>
            ))
            } </>: isError ? <div>error</div>:
            isLoading ?  <Box sx={{ display: 'flex' }}>
                              <CircularProgress />
                         </Box> : null
} 
      

        </Grid2>
    </Grid2>

    </>
   
  )
}

export default BoxVendors
