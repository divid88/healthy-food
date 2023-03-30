import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { useDispatch, useSelector } from 'react-redux';
import { requestReportOrder } from '../slice/orderSlice';
import { Button, Icon, Typography } from '@mui/material';
import { CheckCircleOutline, DangerousOutlined } from '@mui/icons-material';
import { useEffect } from 'react';
import moment from 'jalali-moment';
import toPersianDigits from '../utils/persianNumber';
import { Link } from 'react-router-dom';

export default function Orders() {

  const {access} = useSelector(state => state.customer)
    const {report_orders, report_status} = useSelector(state => state.order)
    const dispatch = useDispatch()

    moment.locale('fa', { useGregorianParser: true });  

    useEffect(()=>{
      dispatch(requestReportOrder(access))
    }, [])



  return (

    <Box sx={{margin:'auto'}}>
      <Link to='/' style={{textDecoration:'none'}}><Button variant='text'>برگشت به صفحه اصلی</Button></Link>
      {report_orders.lenght !== 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ 
        maxWidth: '600px', 
        minWidth:'380px', 
        margin:'30px auto',
        border:'1px solid #aaa'
        }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>تاریخ سفارش</TableCell>
            <TableCell align="right">مبلغ</TableCell>
            <TableCell align="right">وضعیت پرداخت</TableCell>
            <TableCell align="right">وضعیت تحویل</TableCell>
         
    
          </TableRow>
        </TableHead>
        <TableBody>
        {report_orders.map((item) =>(
            <TableRow
              key={item.id}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                "&:nth-of-type(odd)": {
                    backgroundColor: '#eee',
                  }, }}
            >
              <TableCell component="th" scope="row">
              {toPersianDigits(moment(item.created).format('YYYY-MM-DD'))}
              </TableCell>
            
              <TableCell align="right"> {toPersianDigits(item.total_price)}</TableCell>
              <TableCell align="right">    {item.is_paid ?
                  <Icon sx={{color:'success.main'}}> <CheckCircleOutline/> </Icon>:
                  <Icon sx={{color:'red'}}> <DangerousOutlined/></Icon> }
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    ):(
      <Typography>برای شما سفارشی ثبت نشده.</Typography>
    )}
    </Box>
  );
}