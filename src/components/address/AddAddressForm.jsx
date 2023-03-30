import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddAddresses, requestAllAddresses } from '../../slice/addressSlice';
import Dialog from '@mui/material/Dialog';
import { addAddress } from '../../slice/cartSlice';



export default function AddAddressForm({handleClose, setAddAddress}) {
    const [address, setAddress] = useState('')
    const [post_code, setPostCode] = useState('')
    const {newAddress} = useSelector(state => state.address) 
    console.log(newAddress);
    const {city} = useSelector(state => state.location)
    const dispatch = useDispatch()

    const data = {address, city, post_code}

    useEffect(()=> {
        return () => {
            const {id} = newAddress
            dispatch(addAddress(id))


        }
    })

    const handleAddAddress = () => {
        dispatch(requestAddAddresses(data))
        setAddAddress(()=> false)
        handleClose()
    }

    
  return (
    <>
    <Box
      component="form"
      sx={{
        minWidth:'350px', maxWidth:'450px',
    
        
        '& > :not(style)': { m: 1, display:'block', marginX:'auto', color:'grey.700'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        label="آدرس" 
        color="success" 
   
        onChange={(e) => setAddress(e.target.value)} 
        focused fullWidth/>
      <br/>
      <TextField 
        label="پلاک " 
        color="success" 

        onChange={(e) => setPostCode(e.target.value)} 
        focused fullWidth/>


      <Button variant='outlined' type='button' onClick={handleAddAddress}> ثبت</Button>
    </Box>
    </>
  );
}