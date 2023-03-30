import { Box, Button, Typography } from '@mui/material'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { requestPayment } from '../../slice/paymentSlice';
import { useNavigate } from 'react-router-dom';

const MainPayment = () => {

  const {order} = useSelector(state => state.order)
  const {access} = useSelector(state => state.customer.customer)
  const { status } = useSelector(state => state.payment)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {id} = order
  
  const [paid, setChoice] = React.useState(false)

  const data = {id, paid}
  console.log(status);

  const handlePayment = () => {
    dispatch(requestPayment({access, data}))

    setTimeout(()=>{
    navigate('/')
  }, [3000])
  }
  
  return (
    <>
  {/* {!isEqual(payment, {}) && <SuccessTostify/>} */}
    <Box textAlign='center' width='100%'>
        <Typography sx={{marginY:'20px'}}> پرداخت</Typography>
           <FormControl textAlign='center'>
      <FormLabel id="demo-radio-buttons-group-label">آیا پرداخت میکنید؟</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={true}
         onChange={(e) => setChoice(e.target.value)}
          control={<Radio />} label="بله" />

        <FormControlLabel value={false} 
        onChange={(e) => setChoice(e.target.value)} 
        control={<Radio />} label="خیر" />
      
       </RadioGroup>

      <Button variant='outlined' onClick={handlePayment}> پایان پرداخت</Button>
    </FormControl>
    </Box>

    </>
  )
}

export default MainPayment