import { useSelect } from '@mui/base'
import { Alert, Button,  Typography } from '@mui/material'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useParams } from 'react-router-dom'
import FullScreenLayout from '../components/FullScreenLayout'
import { requestVerifyPayment } from '../slice/paymentSlice'

const PaymentScreen = () => {
  const {id} = useParams()
  const {payment} = useSelector(state => state.payment)
  const {is_paid} = payment

  const dispatch = useDispatch()
  useEffect(() =>{
      dispatch(requestVerifyPayment(id))
  }, [])
  return (
   <>
   <FullScreenLayout>
   {is_paid ? 
    <Alert severity="success">مبلغ {payment.amount} پرداخت شد. پرداخت شما موفق بود!!!</Alert>:
    <>
    <Alert severity="warning">پرداخت موفق نبود دوباره امتحان کنید</Alert>

    </>
  }

  <Link to='/'><Button variant='outlined' sx={{margin:5}}>برگشت به صفحه اصلی</Button></Link>
   </FullScreenLayout>

   </>
  )
}

export default PaymentScreen
