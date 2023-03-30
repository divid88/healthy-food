import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem, resetCart } from '../../slice/cartSlice'

const DialogContactVendor = ({open, handleClose, food, id}) => {
  const dispatch = useDispatch()
  const handleAddItem = () => {
    dispatch(resetCart())
    dispatch(addCartItem({food, id}))
    handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography>
            خریدهای شما باید از یک رستوران باشد.
             اگر میخواهید این آیتم اضافه شود باید سبد خرید پاک شود.
        </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleAddItem}>اضافه شود</Button>
          <Button variant='outlined' onClick={handleClose}>کنسل</Button>
        </DialogActions>
    </Dialog>
  )
}

export default DialogContactVendor
