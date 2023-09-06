import { FavoriteBorderOutlined, PinDropOutlined } from "@mui/icons-material"
import { Card, Box, Typography, CardMedia, IconButton, Button, Chip, Icon } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ToggleFavoriteVendor from "./ToggleFavoriteVendor";

const SummeryVendor = ({vendor}) => {
const theme = useTheme()



const StyledCard = styled(Card)`
cursor: pointer;
margin:5px;
box-shadow:2px 2px 5px gray;
transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
&:hover {
  transform: scale(1.02);
}
`;

  return (
    <StyledCard sx={{position:'relative'}}>

      <ToggleFavoriteVendor vendor_id={vendor.id}/>

      <Link to={`/vendors/vendor/${vendor.id}`} style={{ textDecoration: 'none' }}>  
      
      <Box sx={{ position: 'relative' }}>
    <CardMedia
      component="img"
      height="170"
      image={vendor.profile_image
      }
    />
    {vendor.open_times ?  
    (
      <Box>

      </Box>
    )
    : (
    <Box
      sx={{
        position: 'absolute',
        top:0,
        right:0,
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.60)',
        color: 'white',
        padding: '10px',
      }}
    >


      <Typography 
      variant="body2"
      sx={{
        marginTop:'30px',
        textAlign:'center',
        padding:0,
      }}>
        سفارش نمی پذیرد
      </Typography>

      <Typography 
      sx={{
        marginTop:'10px',
        textAlign:'center',
        fontSize:'.6rem',
        padding:0,
      }}>
        شروع سفارش از ساعت
        {vendor.hour_opening} 
      </Typography>
    </Box>)}
    <Box
    sx={{
        position: 'absolute',
        bottom:14,
        left:10,
        borderRadius:'5px',
        overflow: 'hidden',
        width: '70px',
        height: '60px'
    }}>
        <img src={vendor.logo} alt="vendor-logo" width={'70px'} height='100%' />
    </Box>
    <Box
    sx={{
        position: 'absolute',
        top:'150px',
        right:10,
        borderRadius:'5px',
        overflow: 'hidden',
        width: '70px',
        height: '70px'
    }}>
         
      
      <Chip label={<>
      <Typography component='p' sx={{fontSize:'.7rem', margin:0, padding:0}}>۱۵-۲۰</Typography>
      <Typography component='p' sx={{fontSize:'.5rem', margin:0, padding:0}}>دقیقه</Typography>
      </>
    } variant="filled"
       sx={{backgroundColor:'secondary.main', color:'secondary.contrastText', boxShadow:1}}></Chip>
       

    </Box>
  </Box>
  <Box sx={{backgroundColor:'secondary.main', color:'#555'}}>
    <Grid2  sx={{padding: '5px', display:'flex'}}>

      <Grid2 md={6} sx={{p:1}}>
        <Typography >{vendor.name}</Typography>
      </Grid2>

      <Grid2 md={6} >
        {vendor.open_times && 
        
        <Typography variant='subtitle2' textAlign='center'>آماده پذیرش سفارش</Typography>
        
        }
        </Grid2>
    </Grid2>
    <Grid2 container justifyContent={'space-between'}> 
    <Grid2 display='flex' sx={{color:'#999', p:1}}>
      
        <Icon><PinDropOutlined/></Icon> 

       
        <Typography variant="subtitle2" > 
                 انتهای کوچه مرغیا
          </Typography>
        </Grid2>

        <Button variant="outlined" size="small" sx={{padding:0, marginBottom:1, marginRight:1}}>new</Button>
    </Grid2>

  </Box>
  </Link>

</StyledCard>
  )
}

export default SummeryVendor
