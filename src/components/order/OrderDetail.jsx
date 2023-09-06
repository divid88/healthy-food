import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import toPersianDigits from '../../utils/persianNumber';
import DialogPayment from '../payment/DialogPayment';

const OrderDetail = () => {
    const {order} = useSelector(state => state.order)
    const [openPayment, setPaymentDialog] = useState(false)
    const {access} = useSelector(state => state.customer.customer)

    const handleClosePaymentDialog = () => {
      setPaymentDialog(false)
  }

  const handleOpenPaymentDialog = () => {
    setPaymentDialog(true)
}
    
    const {items, shipping_address} = order
    

    const total_price = items.reduce((acc, item) => acc + item.price, 0)
 

  return (
    <>
    <TableContainer component={Paper}>
        <Table  aria-label="simple table" >
        <TableHead>
        <TableRow>
        
        <TableCell align="left">نام غذا</TableCell>
      
        <TableCell align="left">تعداد</TableCell>
        <TableCell align="left">قیمت واحد </TableCell>
        <TableCell align="left">قیمت </TableCell>
      

      </TableRow>
    </TableHead>

    <TableBody>
            {items.map((item, index) => (
              <TableRow
                key={item.food.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell align="left">{item.food.name}</TableCell>
                <TableCell align="left">{toPersianDigits(item.qty)}</TableCell>
                <TableCell align="left">{toPersianDigits(item.price)}</TableCell>
                <TableCell align="left">{toPersianDigits(item.qty * item.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
            <TableCell align="left">مبلغ کل : </TableCell>
            <TableCell align="left">{toPersianDigits(total_price)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>

    </TableContainer>

    <Typography sx={{m:3}}>
        آدرس:
        {shipping_address.address}
    </Typography>
    <Typography textAlign='center' sx={{m:3}}>

        <Button variant="outlined" type='button' onClick={handleOpenPaymentDialog}>
            پرداخت
        </Button>
        <DialogPayment open={openPayment} handleClose={handleClosePaymentDialog}/>
    </Typography>
    
    </>
  )
}

export default OrderDetail
