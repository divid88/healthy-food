import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Fragment } from 'react';
import FoodItem from './FoodItem';


const VendorMenu = ({vendor}) => {
    const menu = vendor.menu

    const {name, id} = vendor
   return (
    <Box sx={{padding:'40px', minHeight:'100vh'}}>
            {vendor.food_type.map((menu_item) => <Fragment key={menu_item.id}>   
             <Typography >{menu_item.name}</Typography> 
                          
        <Grid2 container md={11} spacing={2} sx={{justifyContent:'space-between', margin:'auto'}}>

{menu.foods.map(food => 

       ( food.food_type.id === menu_item.id ? <FoodItem food={food} key={food.id} name={name} id={id}/> : null )
)}  
            
        </Grid2>
        </Fragment>
        )} 
    </Box>
  )
}

export default VendorMenu
