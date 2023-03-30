import {styled} from '@mui/material/styles'
import { TextField, Button } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { requestLoginCustomer } from '../../slice/customerSlice'


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


const MainLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()

 const data = {email, password}
 console.log(data);
  const handleLogin = () => {

    dispatch(requestLoginCustomer(data))

  }


  return (

      <Grid2 
      sx={{
        display:'flex', 
        flexDirection:'column', 
        justifyContent:'center', 
        alignItem:'center', 
        width:'300px' ,  
        height:'250px',
        
      '& > :not(style)': { margin:'10px auto', width: '30ch' },}}>

    
      <NewTextField 
         id="email"
         name='email'
         autoComplete={true}
        label="ایمیل" 
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
         />

      <NewTextField 
      id='password'
      name='password'
        type='password' 
        autocomplete={false}
        label="رمز عبور" 
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <Button type='button' variant='outlined' onClick={handleLogin}>ورود</Button>
      </Grid2>
     
  )
}

export default MainLogin