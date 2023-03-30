import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MainLogin from './MainLogin'
import TabLogin from './TabLogin';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '700px',
  minHeight: '300px',
  bgcolor: 'background.paper',
  border: '1px solid #eee',
  boxShadow: 24,
  
};

export default function LoginDialog({open, handleClose}) {

  return (
    <div>
 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display='flex'>
          <TabLogin/>
        </Box>
      </Modal>
    </div>
  );
}