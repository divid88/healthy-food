import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Typography from '@mui/material/Typography';
import MainAddress from './MainAddress';
import AddAddressForm from './AddAddressForm';
import TabLogin from './TabLogin';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    innerWidth:'300px'
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




export default function ChoiceAddress({open, handleClose}) {


 
  return (
    <div>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
    
        <DialogContent>
          
            <TabLogin/>
          
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}