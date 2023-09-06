import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { checkAuthorization, setAccess } from '../../slice/customerSlice'
import LoginDialog from './LoginDialog'
import { useRefreshTokenMutation } from '../../api/api'

const AuthProvider = ({children}) => {
    const [showLogin, setShowLogin] = useState(false)
    const {refresh} = useSelector(state => state.customer) 

    const [requestRefreshToken, {data:tokens, isSuccess, isError}] = useRefreshTokenMutation()
    const dispatch = useDispatch()
    
    const handleRefresh = async() => {
      try{
        await requestRefreshToken({refresh})
      }catch(error){
        console.log('show login ');
        setShowLogin(true)
      }
    }
    useEffect(() => {

      handleRefresh()
    }, [])

    useEffect(()=> {
      if(isSuccess){
        dispatch(setAccess(tokens))
      } 
      if(isError){
        setShowLogin(true)
      }
    }, [isSuccess])
    
    const setCloseLoginShow = () => {
      setShowLogin(false)
  }

  return (
    <div>
    {children}
  <LoginDialog open={showLogin}  handleClose={setCloseLoginShow}/>
    </div>
  )
}

export default AuthProvider
