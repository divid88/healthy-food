import { Brightness1, DeliveryDiningOutlined, LockClockOutlined, PunchClockOutlined, WatchLaterOutlined } from '@mui/icons-material'
import { Button, Icon, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import ChoiceAddress from '../address/ChoiceAddress'
import Blink from 'react-blink-text';


const VendorHeaderLeft = ({vendor}) => {

    const [openAddress, setOpenAddress] = useState(false)
    
    console.log(vendor.open_times);
    const handleClose = () => {
        setOpenAddress(!openAddress);
       };
      
  return (
   <div >
    <Grid2  md={12} xs={12}>
    {vendor.open_times ? (
        <>
        
        <Typography variant='subtitle2' 
        sx={{
            textAlign:'center',
             marginTop:'30px', 
             color:'primary.dark'}}>
             
             پذیرش سفارشات
                </Typography>
                 <Typography variant='subtitle2' sx={{
                 marginBottom:'30px',
                  color:'green',
                  textAlign:'center'}}>
                    <Blink color='green' text={<Brightness1/>} fontSize='20'>
                    
                    </Blink>
                 </Typography>
        </>
    ):(   
    <>
    <Typography variant='subtitle2' sx={{textAlign:'center', marginTop:'30px', color:'grey.700'}}>
        خارج از سفارش گیری
        </Typography>
        <Typography variant='subtitle2' sx={{textAlign:'center', marginBottom:'30px', color:'grey.700'}}>
        آغازپذیرش سفارش از ساعت {vendor.hour_opening}
        </Typography>
    </>
        )}

    </Grid2>


    <div  style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
    <Grid2 md={6} xs={6} display='flex'>
        <Grid2  sx={{marginX:'5px', paddingTop: '5px'}}>
        <Icon><WatchLaterOutlined sx={{color:'primary.main'}}/></Icon>
        &nbsp;
        </Grid2>
        <Grid2>
            <Typography  variant='subtitle2' color='grey.700'>
                40-50 دقیقه
            </Typography>
            <Typography variant='caption' color='grey.500' >
                زمان تحویل
            </Typography>
        </Grid2>
    </Grid2>
    <Grid2 md={6} xs={6} container>

    <Grid2  sx={{marginX:'5px', paddingTop: '5px'}}>
        <Icon><DeliveryDiningOutlined sx={{color:'primary.main', fontSize:'1.7rem'}}/></Icon>
        &nbsp;
        </Grid2>
        <Grid2  md={6} xs={6}>
            <Typography  variant='subtitle2' color='grey.700'>
                <Button variant='text' onClick={handleClose} sx={{padding:0}}>انتخاب آدرس</Button>
            </Typography>
            <Typography variant='caption' color='grey.500' >
                زمان تحویل
            </Typography>
        </Grid2>

    </Grid2>

    </div>
    <ChoiceAddress open={openAddress}  handleClose={handleClose}/>
   </div>
  )
}

export default VendorHeaderLeft
