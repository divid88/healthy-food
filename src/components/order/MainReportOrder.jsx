import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { requestReportOrder } from '../../slice/orderSlice';
import AuthProvider from '../../components/customer/AuthProvider'
import { CheckCircleOutline, DangerousOutlined } from '@mui/icons-material';
import { Icon } from '@mui/material';


const MainReportOrder = () => {

  const {access} = useSelector(state => state.customer)
    const {report_orders, report_status} = useSelector(state => state.order)
    const dispatch = useDispatch()


    useEffect(()=>{
    
            dispatch(requestReportOrder(access))
        

    }, [])
  return (
    
    <Grid2 container md={12}
     sx={{
        margin:'20px auto',
     display:'flex', 
    flexDirection:'column', 
    alignItems:'center'}}>

    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="left">شماره سفارش</TableCell>
            <TableCell align="left">مبلغ</TableCell>
            <TableCell align="left">وضعیت پرداخت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {report_orders.map((item) =>(
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={item.id}
            >
              <TableCell  scope="row">
                  {item.id}
                </TableCell>

                <TableCell>
                  {item.total_price}
                </TableCell>

                <TableCell>
                  {item.is_paid ?
                  <Icon sx={{color:'success.main'}}> <CheckCircleOutline/> </Icon>:
                  <Icon sx={{color:'red'}}> <DangerousOutlined/></Icon> }
                </TableCell>
            </TableRow>
    ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>

  )
}

export default MainReportOrder
