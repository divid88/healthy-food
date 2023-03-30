import Dialog from '@mui/material/Dialog';
import { Box  } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


import React, { useEffect } from 'react'
import MainPayment from './MainPayment';
import Countdown from './CountDown';

const DialogPayment = ({open, handleClose}) => {

  useEffect(()=>{
    const setTimeDialog =  setTimeout(() => {
      handleClose()
    }, 10000);

    return () => clearTimeout(setTimeDialog)
  }, [])

  return (
    <Dialog open={open} onClose={handleClose} sx={{overflow:'hidden'}}>
      <Countdown/>
    <Box sx={{minHeight:'350px', minWidth:'400px' }}>
      <Grid2 container>
        <MainPayment/>
    </Grid2>
    </Box>
  </Dialog>
  )
}

export default DialogPayment