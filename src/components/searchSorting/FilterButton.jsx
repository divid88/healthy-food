import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Button, Collapse, Typography } from "@mui/material"
import { MenuBookOutlined } from "@mui/icons-material"
import { useState } from "react"
import DialogFilter from "./DialogFilter"


const FilterButton = () => {
  const [open, setOpen] = useState(false)


  const handleClose = () => {
    setOpen(false)
  }
  return (
      <>
      <Grid2 md={2} sm={4} xs={1} position='relative'>
            <Button 
            variant="outlined" 
            size="large" 
            endIcon={<MenuBookOutlined />}
            onClick= {() => setOpen(true)}
            sx={{
              height:'3.5rem',
              backgroundColor: '#fff',
              marginLeft: '4px',
              color: 'gray.500',
             
              '& .MuiButton-root':{
                height: '5rem',
                
              }

            }}>
              <Typography sx={{display:{xs:'none', sm:'none' , md:'inline-block'}}}>
              فیلتر رستوران
              </Typography>
              
              </Button>
              <DialogFilter open={open} handleClose={handleClose}/>

          </Grid2>
         
          </>
  )
}

export default FilterButton
