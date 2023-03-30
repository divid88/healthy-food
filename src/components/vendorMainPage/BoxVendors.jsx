import { CardMedia, Box, Typography, Card } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestAllVendorCity } from '../../slice/vendorsCitySlice'
import SearchSorting from '../searchSorting/SearchSorting'
import BannerImage from '../../assets/image/healthy_banner.jpg'
import SummeryVendor from './SummeryVendor'

const BoxVendors = () => {
  const {city} = useSelector(state => state.location)
  const {vendors}  = useSelector(state => state.vendors)
  const {favorites} = useSelector(state => state.customer)

  const listFavoritesId = favorites.map(f => f.vendor)
  

  console.log(listFavoritesId);
  const dispatch = useDispatch()
    
  useEffect(() => {
    if(city !== 0){
    dispatch(requestAllVendorCity(city))
    }
  }, [dispatch, city])
  return (
    <>
     

<SearchSorting/> 
<Grid2 container>
<Grid2 md={11} sx={{margin:'auto',display:{xs:'none', md:'block'}, overflow:'hidden'}}>
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

{listFavoritesId.length > 0 && 

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
}


    <Grid2 container display='flex' sx={{padding:'20px', justifyContent:'center'}}>
        <Grid2 md={11} >
            <Typography variant='h5' sx={{color:'GrayText'}}>
                رستوران ها در محدوده
                </Typography>
        </Grid2>
        
        <Grid2 container md={12} xs={12} display="flex" sx={{marginY: '10px'}} spacing={1} >
            { vendors.map(vendor => (
              <Grid2 md={4} xs={12} key={vendor.id}><SummeryVendor vendor={vendor}/></Grid2>
            ))
            } 
      

        </Grid2>
    
    </Grid2>
    </>
   
  )
}

export default BoxVendors
