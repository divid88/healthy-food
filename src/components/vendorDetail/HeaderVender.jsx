import { FavoriteBorderOutlined } from "@mui/icons-material"
import { Button, CardMedia, IconButton } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ImageHeader  from '../../assets/j1ohtrn0.2jw_big.jpg'
import VendorHeaderLeft from "./VendorHeaderLeft"
import VendorHeaderRight from "./VendorHeaderRight"
import { Link } from "react-router-dom"

const HeaderVender = ({vendor}) => {

  return (
    <Grid2 sx={{bgcolor:'#fff', borderBottom:'1px solid #eee', paddingBottom:'10px'}}>
        <Grid2 md={12} height='350px' 
            sx={{
                backgroundImage: `url(${vendor.profile_image})`,
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                bgcolor: 'rgba(0, 0, 0, 0.60)',
            }} container>

                <Grid2 md={6} sx={{m:2}}>
                    <IconButton >
                        <FavoriteBorderOutlined 
                            sx={{color:'primary.main',
                                fontSize:'1.5rem'}} />
                    </IconButton>
                </Grid2>


                <Grid2 md={5} sx={{textAlign:'right', marginTop:'15px'}}>
                    <Link to='/'>
                    <Button variant='outlined'>
                        برگشت
                    </Button>
                    </Link>
                </Grid2>
                
           
        </Grid2>
        <Grid2 container>

            <Grid2  md={6} xs={12} display='flex' sx={{justifyContent:'center'}}>
                <VendorHeaderRight vendor={vendor}/>
            </Grid2>

            <Grid2 md={6} xs={12}>
                <VendorHeaderLeft vendor={vendor}/>
            </Grid2>

        </Grid2>
    </Grid2>
  )
}

export default HeaderVender
