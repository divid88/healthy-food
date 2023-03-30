import { Drawer,  } from "@mui/material"
import MainCart from "./MainCart"


const DrawerCart = ({openDrawer, handleCloseDrawer}) => {


  return (
    <>
    <Drawer
    anchor="right"
    open={openDrawer}
    onClose={handleCloseDrawer}
    PaperProps={{
      sx: { width: "337px" },
    }}
    >

        <MainCart/>
    </Drawer>
    </>
  )
}

export default DrawerCart
