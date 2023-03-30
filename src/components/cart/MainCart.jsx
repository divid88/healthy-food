import { Box, Typography, Button } from '@mui/material'
import { isEqual } from 'lodash'
import { useDebugValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EmptyCartImage from '../../assets/fig-cart-empty.png'
import { resetCart } from '../../slice/cartSlice'
import { requestCreateOrder } from '../../slice/orderSlice'
import ChoiceAddress from '../address/ChoiceAddress'
import TableCart from './TableCart'
import LoginDialog from '../customer/LoginDialog'
import { checkAuthorization } from '../../slice/customerSlice'

const MainCart = () => {
  const {cart_items, shipping_address} = useSelector(state => state.cart)
  const [addressNone, setAddressNone] = useState(false)
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const {is_available, order} = useSelector(state => state.order) 
  const {access, customer, refresh, refresh_exp} = useSelector(state => state.customer)
  const access_token = JSON.parse(localStorage.getItem('access_token'))

  const dispatch = useDispatch()
  const data_refresh = {"refresh": refresh}


    useEffect(() => {
      if(!isEqual(customer, {})){
        dispatch(checkAuthorization(data_refresh))
      }
    }, [])

  

  const data = {shipping_address, cart_items, access}
  const handleCreateOrder = () => {

    if(refresh_exp || isEqual(customer, {})){
      setOpenLoginDialog(true)
    }else{
      
    if(shipping_address === 0){
      setAddressNone(true)
    }else{
       dispatch(requestCreateOrder(data))
        if(is_available && access_token){
          dispatch(resetCart())
          const {id} = order
          const path = `/order/${id}`
          setTimeout(()=>{
            window.location.href= path
           }, 200)
        }}
    
  }
}

  const handleClose = () => {
    setAddressNone(false)
  }
  
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false)
  }
  
  return (
    <>
    {isEqual(cart_items, []) ? (
    <Box sx={{height:'100%', position:'fixed'}}>
      <img src={EmptyCartImage} alt="empty cart" width='100%'/>
      <Typography variant="subtitle2" sx={{color:'gray', textAlign: 'center'}}>
        سبد شما خالی میباشد
      </Typography>
    </Box>):(
      <Box sx={{height:'100%', position:'fixed'}}>
        <TableCart cart_items={cart_items}/>
      <Typography sx={{marginY:'10px', textAlign:'center'}}>
        <Button variant='outlined' onClick={handleCreateOrder}>ساخت سفارش</Button>
        </Typography>
      </Box>
    )}
<ChoiceAddress open={addressNone} handleClose={handleClose}/>
<LoginDialog open={openLoginDialog} handleClose={handleCloseLoginDialog}/>
</>
  )
}

export default MainCart
