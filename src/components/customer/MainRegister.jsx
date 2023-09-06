import { TextField, Button } from "@mui/material"
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {styled} from '@mui/material/styles'
import { useRegisterUserMutation } from "../../api/api"
import { setUser } from "../../slice/customerSlice"

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

const MainRegister = ({handleClose}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Rpassword, setًًًًRPassword] = useState('')

  const [registerRequest, {data: registerData, isSuccess, isLoading}] = useRegisterUserMutation()

  const dispatch = useDispatch()

 const data = {email, password}

 const register = async() => {
  try{
    await registerRequest(data)
  }catch(error){
    console.log(error)
  }
 }
 useEffect(()=>{
  if(isSuccess){
    dispatch(setUser(registerData))
    handleClose()
  }
 })

  const handleRegister = () => {

    register()
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

<NewTextField 
    id='password'
    name='password'
      type='password' 
      autocomplete={false}
      label="تکرار رمز عبور"   
      variant="outlined"
      value={Rpassword}
      onChange={(e) => setًًًًRPassword(e.target.value)}
      />
    <Button type='button' variant='outlined' onClick={handleRegister}>ثبت نام</Button>
    </Grid2>
   
  )
}

export default MainRegister
