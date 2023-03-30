import { IconButton } from "@mui/material"
import { FavoriteBorderOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import AuthProvider from '../customer/AuthProvider'
import { isEqual } from "lodash"
import { useState } from "react"
import LoginDialog from "../customer/LoginDialog"
import { requestAddFavoiteVendor, requestRemoveFavoiteVendor } from "../../slice/customerSlice"

const ToggleFavoriteVendor = ({vendor_id}) => {
    const {access, customer, favorites} = useSelector(state => state.customer)
    
    const [click, setClick] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const listFavorite = Object.values(favorites)
    
    const dispatch = useDispatch()

    const handdleClick = () => {

    if(isEqual(customer, {})){
        setShowLogin(true)
    }else{
        const exsiteVendor = listFavorite.find((vendor) => vendor.vendor === vendor_id)
    
        if(exsiteVendor){
          dispatch(requestRemoveFavoiteVendor({access, vendor_id}))
        }else{
        dispatch(requestAddFavoiteVendor({access, vendor_id}))
        }
    }
    }

    const handleCloseLogin = () => {
        setShowLogin(false)
    }
  return (
  <>
  <IconButton
       disableFocusRipple={false}
       disableRipple={true}
     sx={{position:'absolute', top:0, left:0, zIndex:100}}

     onClick={handdleClick}
       >
        <FavoriteBorderOutlined   sx={{
          color: 'warning.main',

        
        '&:hover':{
            color:'primary.main',
            
        },
        overflow:'hidden',
 
   }}/>
    </IconButton>
   
  <LoginDialog open={showLogin} handleClose={handleCloseLogin} />
  </>
  )
}

export default ToggleFavoriteVendor
