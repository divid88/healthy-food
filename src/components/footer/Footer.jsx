import { CopyrightOutlined, Facebook, Instagram, Telegram } from "@mui/icons-material";
import { Link } from "@material-ui/core";
import { Box, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import LogoHealth from '../../assets/logo/7776956.ico';

const Footer = () => {
  return (
    <Box 
    
    sx={{
        backgroundColor:'#444',
        color: '#aaa',
        overflow:'hidden',
        zIndex:1000
    }}>

        <Grid2 container >
            <Grid2 md={6} xs={12}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '3'
            }}>
            
            <Grid2>
            <img src={LogoHealth} 
            style={{
                width:'3rem',  
                margin:'1rem', 
                borderRadius:'1.5rem'
                
                }}/>
            </Grid2>
            <Grid2>
            <Typography variant='h6' >{'  '}طراحی با داووتی کپی رایت  ۲۰۲۳  <CopyrightOutlined/></Typography>

            </Grid2>
            
            </Grid2>
          
            <Grid2 md={6} xs={12}
            sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}
            >
                <List sx = {{display:'flex'}}>
                    <ListItem ><ListItemButton><Telegram/></ListItemButton></ListItem>
                    <ListItem><ListItemButton><Instagram/></ListItemButton></ListItem>
                    <ListItem><ListItemButton><Facebook/></ListItemButton></ListItem>
        
                </List>
            </Grid2>

        </Grid2>
    </Box>
  )
}

export default Footer
