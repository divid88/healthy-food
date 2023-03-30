import { Drawer } from '@mui/material'
import React from 'react'
import MainPanle from './MainPanle'

const PanelDrawer = ({open, handleClose}) => {
  return (
    
    <Drawer
    anchor='left'
    open={open}
    onClose={handleClose}
    >
        <MainPanle/>

    </Drawer>
  )
}

export default PanelDrawer
