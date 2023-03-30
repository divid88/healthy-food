import { AppBar, Toolbar, Box} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import LeftHeader from './LeftHeader'
import MiddleHeader from './MiddleHeader'
import RightHeader from './RightHeader'


const Header = () => {
  


  return (
    <Box >
    <AppBar sx={{backgroundColor:'secondary.main', boxShadow:'0', borderBottom:'1px solid #eee'}}>
        <Toolbar >
            <Grid2 container width={1}>
                <Grid2 md={4} xs={8} sx={{paddingTop:'8px'}}><RightHeader/></Grid2>
                <Grid2 md={4}  sx={{textAlign: 'center',display:{xs:'none', md:'inline-block'}} }>
                    <MiddleHeader/>
                </Grid2>
                <Grid2 md={4} xs={4} sx={{textAlign: 'right', paddingTop:'8px'}}>
                    <LeftHeader/>
                </Grid2>
            </Grid2>
        </Toolbar>
    </AppBar>
  

    </Box>
  )
}

export default Header
