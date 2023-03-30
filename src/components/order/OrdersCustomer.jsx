import * as React from 'react';

import {  Drawer } from '@mui/material';

import MainReportOrder from './MainReportOrder';
import AuthProvider from '../customer/AuthProvider';


export default function OrdersCustomer({open, handleClose}) {


  return (
  
    <Drawer
    anchor='left'
    open={open}
    onClose={() => handleClose(false) }
    >
      <AuthProvider>
    <MainReportOrder/>
    </AuthProvider>
    </Drawer>
    
   
  );
}