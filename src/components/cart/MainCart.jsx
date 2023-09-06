import { Box, Typography, Button } from '@mui/material'
import { isEqual } from 'lodash'
import { useDebugValue, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EmptyCartImage from '../../assets/fig-cart-empty.png'
import { resetCart } from '../../slice/cartSlice'

import ChoiceAddress from '../address/ChoiceAddress'
import TableCart from './TableCart'
import LoginDialog from '../customer/LoginDialog'
import { useRefreshTokenMutation } from '../../api/api'
import { useCreateOrderMutation } from '../../api/api'
import { setAccess } from '../../slice/customerSlice'
import { setOreder } from '../../slice/orderSlice'

const MainCart = () => {
  const {cart_items, shipping_address} = useSelector(state => state.cart)
  const [addressNone, setAddressNone] = useState(false)
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const {access, username, refresh, refresh_exp} = useSelector(state => state.customer)

  const [requestRefreshToken, {data:tokens, isSuccess:refreshSuccess, isError:RefreshError}] = useRefreshTokenMutation()

  const handleRefresh = async() => {
    try{
      await requestRefreshToken({refresh})
    }catch(error){
      console.log(" login show");
      setOpenLoginDialog(true)
    }
  }
  useEffect(() => {
    if(RefreshError){
      setOpenLoginDialog(true)
    }
  }, [RefreshError])

  const dispatch = useDispatch()

const [requestCreateOrder, {data:order, isSuccess, isError}] = useCreateOrderMutation()

const handleSendOrder = async() => {
  
  try{
    await requestCreateOrder({data, access})
  }catch(error){
    console.log('error', error)
  }
}


useEffect(()=>{
  if(refreshSuccess){
    dispatch(setAccess(tokens))
  }

}, [refreshSuccess])


useEffect(() => {
  if(isSuccess){
    dispatch(setOreder(order))
    dispatch(resetCart())
    const {id} = order
    const path = `/order/${id}`
    setTimeout(()=>{
      window.location.href=path
     }, 200)
  }

  return () =>{
    clearTimeout()
  }
})

  const data = {shipping_address, cart_items}
  const handleCreateOrder = () => {
    handleRefresh()

    if(shipping_address === 0 && refreshSuccess){
      setAddressNone(true)
    }
    
    if(shipping_address !==0 && refreshSuccess){
        handleSendOrder()
  
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
