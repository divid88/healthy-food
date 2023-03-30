import { Button } from "@mui/material"
import LoginDialog from "../customer/LoginDialog"
import { useState } from "react"
import { isEqual } from "lodash"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import OrdersCustomer from "../order/OrdersCustomer"
import PanelDrawer from "../userPanle/PanelDrawer"

const RightHeader = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [openUserDrawer, setOpenUserDrawer] = useState(false)

  const {customer, username} = useSelector(state => state.customer)

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(!openLoginDialog)
  }

  const handleToggleUserDrawer = () => {

    setOpenUserDrawer(!openUserDrawer)
  }


  return (
    <>
    {isEqual(customer, {}) ? <> 
        <Button variant="outlined" onClick={handleCloseLoginDialog}>ورود</Button>

        <LoginDialog open={openLoginDialog} handleClose={handleCloseLoginDialog}/>
        </>
        :   
        <>

          {/* <OrdersCustomer open={openOrdersDrawer} handleClose={ToggleOpenOrderDrawer}/> */}
        <Button variant="outlined" onClick={handleToggleUserDrawer}>{username}</Button>

       
        <PanelDrawer open={openUserDrawer} handleClose={handleToggleUserDrawer} />
        </>}
    </>
  )
}

export default RightHeader
