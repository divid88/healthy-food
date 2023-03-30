import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps }  from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MainLogin from './MainLogin';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

export default function RegisterDialog({handleClose, open}) {

      

  return (
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{padding:0}}
      >
      
        <DialogContent sx={{padding:0}}>
        <DialogContentText>
        <MainLogin/>
        </DialogContentText>
        </DialogContent >
   
      </Dialog>
  
  );
}