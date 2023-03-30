import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import TabFilter from './TabFilter';



const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  padding: '5px 10px'
};

export default function DialogFilter({open, handleClose}) {

  return (
    <div>
 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} color='grey.700' >
        <TabFilter/>
        </Box>
      </Modal>
    </div>
  );
}