import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Typography, IconButton, Card, CardMedia } from "@mui/material"
import { AddCircleOutline } from "@mui/icons-material"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from "react-redux"
import { addCartItem } from '../../slice/cartSlice';
import DialogContactVendor from "./DialogContactVendor"
import { useState } from "react"

const FoodItem = ({food, id}) => {
    const dispatch = useDispatch()
    const [openContactVendor, setOpenContactVendor] = useState(false)
    const {cart_items, vendor} = useSelector(state => state.cart)

    const handleCloseContactVendor = () => {
      setOpenContactVendor(false)
    }
 
    const handleAddCart = () => {
        if (vendor === 0){
        dispatch(addCartItem({food, id}))
        }else{
          if(vendor === id){
            dispatch(addCartItem({food, id}))
          }else{
            setOpenContactVendor(true)
          }
        }
    }

    const theme = useTheme()
    const StyledCard = styled(Card)`
    padding:'5px'; height:'6rem'; width:'100%'; borderRadius:'10px';
box-shadow:2px 2px 5px gray;
transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
&:hover {
  transform: scale(1.02);
}
`;
  return (
    <Grid2 md={5} display='flex' >
    <StyledCard sx={{padding:'1px', height:'7rem', width:'100%', borderRadius:'10px'}} >
        <Grid2 display='flex' height='100%'>
        <Grid2 md={3} height='100%' sx={{}}>
        <CardMedia src={food.image}sx={{ height:'100%', borderRadius:'10px'}} alt="food image" component='img'/>
        </Grid2>
        <Grid2 md={9} sx={{padding:'5px'}}>
            <Typography sx={{width:'100%', color:'grey.700'}}>
                {food.name}
            </Typography>
            <Typography variant='caption' color='grey.500'>
              {food.description} 
            </Typography>
            <Grid2 
            sx={{
                display:'flex', 
                justifyContent:'space-between', 
                color:'primary.main',
                marginTop:'25px',
                padding:'3px'
                }}>
                <Typography variant='subtitle2' >
                    قیمت: {food.price}
                </Typography>
            
                <IconButton
                 sx={{
                  marginBottom:'35px',
                   padding:0}}
                   value={food}
                   onClick={handleAddCart}
                   >
                    <AddCircleOutline sx={{color:'primary.main'}}/>
                </IconButton>
            
            </Grid2>
        </Grid2>
        
        </Grid2>
    </StyledCard>
    <DialogContactVendor open={openContactVendor} handleClose={handleCloseContactVendor} food={food} id={id}/>
</Grid2>
  )
}

export default FoodItem
