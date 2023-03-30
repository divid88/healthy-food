import { Button } from "@mui/material"
import { Height, ShoppingCart } from "@mui/icons-material" 
import DrawerCart from "../cart/DrawerCart"
import { useState } from "react"

const LeftHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleCloseDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
    <Button variant="contained" 
    onClick={ handleCloseDrawer }
    sx={{
        height:'2.5rem'
    }}
     endIcon={
     <ShoppingCart 
     sx={{
    height:'1.5rem',
    width:'1.5rem',
    color: 'secondary.main', 
    }} />}/>
<DrawerCart openDrawer={openDrawer} handleCloseDrawer={handleCloseDrawer}/>
    </>
  )
}

export default LeftHeader
 