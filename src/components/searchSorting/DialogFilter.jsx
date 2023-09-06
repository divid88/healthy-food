import { Box, Typography} from "@mui/material"

import TabFilter from './TabFilter'

const DialogFilter = () => {
  return (
    <Box md={10} xs={12} 
    sx={{
    height:'auto',
    width:'250px',
    position:'absolute', 
    top:'55px', 
    right:'1px', 
    p:2,
    bgcolor:'white',
    boxShadow:'2px 2px 5px #aaa',
    borderRadius:'5px'
}}
    >

        <TabFilter/>
    </Box>
  )
}

export default DialogFilter