import { Badge, Button } from "@mui/material"
import { Height, ShoppingCart } from "@mui/icons-material" 
import DrawerCart from "../cart/DrawerCart"
import { useState } from "react"
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import toPersianDigits from "../../utils/persianNumber";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color:'red'
  },
}));

const LeftHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const {cart_items} = useSelector(state => state.cart)

  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
    <Button variant="outlined" 
    onClick={ handleCloseDrawer }
    sx={{
        height:'2.5rem'
    }}
     
  >
    <StyledBadge badgeContent={toPersianDigits(cart_items ? cart_items.length : 0)}   anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }} 
  >
    <ShoppingCart 
     sx={{
    height:'1.5rem',
    width:'1.5rem',
    }} /> 
    </StyledBadge>
    </Button>
<DrawerCart openDrawer={openDrawer} handleCloseDrawer={handleCloseDrawer}/>
    </>
  )
}

export default LeftHeader
 