import { Container, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import AddFood from './AddFood'

const MenuVendor = () => {
  return (
    <div>
        <Container sx={{p:2}}>
        <Grid2 md={12}>
            <Typography sx={{color:'#555', textAlign:'center'}}>
برای ساخت منو ابتدا از گروههای مشخص شده یکی را انتخاب کنید و نامی که دوست دارید در منو شما نمایش داده شود در زیر گروه وارد کنید.</Typography>
        </Grid2>
        <Grid2 md={12}>
            <AddFood/>

        </Grid2>

        </Container>
    </div>
  )
}

export default MenuVendor