import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Typography from '@mui/material/Typography';
import MainAddress from './MainAddress';
import AddAddressForm from './AddAddressForm';

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
    const [addAddress, setAddAddress] = React.useState(false)

 
  return (
    <div>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
    
        
          <Typography  gutterBottom 
          sx={{
            padding:'10px',
            textAlign:'center', 
            color:'grey.700',
            fontSize:'1.2rem',
            fontWeight:'900'
            }}>
            {addAddress ? 'ثبت آدرس' :'انتخاب آدرس'} 
          </Typography>
          <DialogContent dividers>
          <Typography gutterBottom>
           {addAddress ? <AddAddressForm handleClose={handleClose} setAddAddress={setAddAddress}/> : 
           <MainAddress handleClose={handleClose}/>}
            </Typography>
          <Typography gutterBottom textAlign='center'>
        
          {! addAddress && 
          <Button variant='outlined' onClick={() => setAddAddress(true)}>اضافه کردن آدرس</Button>
}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}