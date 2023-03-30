import { FormControl, Select, MenuItem, FormHelperText, Button, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { requestAllAddresses } from "../../slice/addressSlice"
import { isEqual } from "lodash"
import { addAddress } from "../../slice/cartSlice"

const MainAddress = ({handleClose}) => {
    const [addressState, setAddress] = useState(0)
    const {addresses} = useSelector(state => state.address)
    const dispatch = useDispatch()

    useEffect(()=> { 
        dispatch(requestAllAddresses())
    }, [dispatch])

    const handleChange = (e) => {
        setAddress(e.target.value)
    }

    const handleAddAddressToCart = () => {
        dispatch(addAddress(addressState))
        handleClose()
    }
  return (
    <Grid2 md={4}>    
    
    {isEqual(addresses, []) ? (
        <Typography>آدرسی برای شما ثبت نشده</Typography>
    ) : (<FormControl sx={{ m: 1, minWidth:'350px', maxWidth:'450px'}}>
    <Select
    value={addressState}
     onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
    
    {addresses.map(address=> 
      <MenuItem value={address.id}>{address.address}</MenuItem>
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
  </Grid2>

  )
}

export default MainAddress
