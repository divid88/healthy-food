import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { checkAuthorization } from '../../slice/customerSlice'
import LoginDialog from './LoginDialog'

const AuthProvider = ({children}) => {
    const [showLogin, setShowLogin] = useState(false)
    const {refresh_exp, refresh} = useSelector(state => state.customer) 

   
    const dispatch = useDispatch()
    const data = {"refresh": refresh}
    useEffect(() => {
    
        dispatch(checkAuthorization(data))
        

    }, [])
    
    const setCloseLoginShow = () => {
      setShowLogin(false)
  }

  return (
    <div>
  {!refresh_exp ? <>{children}</> :  
  <LoginDialog open={true}  handleClose={setCloseLoginShow}/>}
    </div>
  )
}

export default AuthProvider
