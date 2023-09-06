import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import { addAddress } from '../../slice/cartSlice';
import { useRegisterAddressMutation, useRequestAddressesQuery } from '../../api/api';

import {styled} from '@mui/material/styles'

const NewTextField = styled(TextField)(
  {
    '& label': {
      fontSize:'13px',
      lineHeight:'.9'
    },
    '& .MuiOutlinedInput-input': {
      color: '#555',
      padding:'7px',
      
    },

    '& .MuiOutlinedInput-root':{

      '& fieldset': {
        borderColor: '#ccc',
      
      },

     
    }
  })

export default function AddAddressForm({handleClose, setAddAddress}) {
    const [address, setAddress] = useState('')
    const [post_code, setPostCode] = useState('')
 

    const {city} = useSelector(state => state.location)
    const dispatch = useDispatch()
    const {access} = useSelector(state => state.customer)
    const [requestAddAddress, {data:newAddress, isSuccess, isError, isLoading }] = useRegisterAddressMutation()

    const data = {address, city, post_code}

   const handleAddress = async() => {

    try{
      requestAddAddress({data, access})
    }catch(error){
      console.log("error", error)
    }
   }

    const handleAddAddress = () => {
      handleAddress()
      
    }

    useEffect(() => {
      if(isSuccess){
      dispatch(addAddress(newAddress.id))
      handleClose()
      }
    }, [isSuccess])
  return (
    <>
    <Box
      component="form"
      sx={{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItem:'center', 
        width:'300px' ,
       height:'250px',   
     
      '& > :not(style)': { margin:'10px auto', width: '30ch' },}}
      noValidate
      autoComplete="off"
    >
      <NewTextField 
       id="address"
       name='address'
       autoComplete={true}
      label="آدرس" 
      variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
       />
       <NewTextField 
       id="address"
       name='address'
       autoComplete={true}
      label="پلاک" 
      variant="outlined"
      value={post_code}
      onChange={(e) => setPostCode(e.target.value)}
       />

      <Button variant='outlined' type='button' onClick={handleAddAddress}> ثبت</Button>
    </Box>
    </>
  );
}