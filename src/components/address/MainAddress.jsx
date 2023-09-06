import { FormControl, Select, MenuItem, FormHelperText, Button, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"


import { addAddress } from "../../slice/cartSlice"
import { useRequestAddressesQuery } from "../../api/api"


const MainAddress = ({handleClose}) => {
    const [addressState, setAddress] = useState(0)
    const {access} = useSelector(state => state.customer)
    const dispatch = useDispatch()

    const {data:addresses, isSuccess, isError, isLoading} = useRequestAddressesQuery(access)
    const handleChange = (e) => {
        setAddress(e.target.value)
    }

    const handleAddAddressToCart = () => {
        dispatch(addAddress(addressState))
        handleClose()
    }

    console.log(addresses);
  return (
    
    <Grid2 md={4}>   

<Typography  gutterBottom 
          sx={{
            padding:'10px',
            textAlign:'center', 
            color:'grey.700',
            fontSize:'1.2rem',
            fontWeight:'900'
            }}>
            {addAddress ? 'ثبت آدرس' :'انتخاب آدرس'} 
          </Typography>
        
    {isSuccess ?
      <> 
    {addresses.length === 0 ? (
        <Typography>آدرسی برای شما ثبت نشده</Typography>
    ) : (<FormControl sx={{ m: 1, minWidth:'350px', maxWidth:'450px'}}>
    <Select
    value={addressState}
     onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
    
    {addresses.map(address=> 
      <MenuItem value={address.id} key={address.id}>{address.address}</MenuItem>
      )}
    </Select>
    <FormHelperText>آدرس های شما</FormHelperText>

    <Button 
        type='submit' 
        disabled={addressState ? false : true } 
        variant="outlined"
        onClick={handleAddAddressToCart}
        > 
        انتخاب
        
        </Button>
  </FormControl>)}
  </>:isError ? <div>error</div>: isLoading ? <div>Loading</div> : null
  
}
  </Grid2>
  
  )
}

export default MainAddress
