import { PinDropOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { useSelector } from 'react-redux'

const ShowLocation = () => {
  const { city, all_cities} = useSelector(state => state.location)
  const customer_city = all_cities.find(item => item.id === Number(city))

  return (
    <Grid container
     sx={{
     display:'flex',
     justifyContent:'center',
     margin:0,
     padding:'13px',
     marginTop:'67px',
     height:'3rem', 
     borderBottom:'1px solid #eee'
     }}>
        <Grid2 md={4} sx={{display:'flex'}}>
                    <PinDropOutlined sx={{color:'GrayText'}}/>
                    <Typography 
                    variant='subtitle1' 
                    sx={{
                        display:'flex',
                        color:'GrayText',
                    }}
                    >
                         شهر شما 
                        {"  "}
                         <Typography sx={{marginX:'2px', color:'primary.main' }}>
                            {"  "}
                            {city !== 0 && customer_city.name}
                        </Typography> 
                         </Typography>
        </Grid2>

    </Grid>
  )
}

export default ShowLocation
