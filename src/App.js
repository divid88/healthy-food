import Header from './components/header/Header'
import ThemeLayout from './templates/ThemeLayout'
import { Box } from '@mui/material'
import ShowLocation from './components/showLocation/ShowLocation'
import SearchSorting from './components/searchSorting/SearchSorting'
import BoxVendors from './components/vendorMainPage/BoxVendors'
import Footer from './components/footer/Footer'
import VendorDetail from './screen/VendorDetail'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { isEqual } from 'lodash'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './screen/Index'
import MainChoiceCity from './components/choiceCity/MainChoiceCity'
import OrderScreen from './screen/OrderScreen'
import RegisterVendor from './screen/RegisterVendor'
import PaymentScreen from './screen/PaymentScreen'
import AuthProvider from './components/customer/AuthProvider'
import Orders from './screen/Orders'
import SearchFilter from './screen/SearchFilter'
import AdminVendor from './screen/AdminVendor'

const App = () => {

  const {city} = useSelector(state => state.location)
  
  return (
   <>
   <ThemeLayout>
 
       
       
        <BrowserRouter>
        <Header/>
          <ShowLocation/>
        {isEqual(city, 0) && <MainChoiceCity show={true}/>}
          <Routes>
             
            <Route path='/' element={<Index/>}/>
            <Route path='/search' element={<SearchFilter/>}/>
            <Route path='/vendors' element={<BoxVendors />} />
            <Route path='vendors/vendor/:id' element={<VendorDetail/> }/>

         
            <Route path='order/:id' element={<AuthProvider><OrderScreen/></AuthProvider>} />
         

            <Route path='payments/:id' element={<AuthProvider> <PaymentScreen/> </AuthProvider>} />
            <Route path='/orders' element={<AuthProvider><Orders/></AuthProvider>}/>

            <Route path='/addVendor' element={<AuthProvider><RegisterVendor/></AuthProvider>}/>
            <Route path='/admin_vendor' element={<AuthProvider><AdminVendor/></AuthProvider>}/>
    
            </Routes>
          </BrowserRouter>
    <Footer/>
    </ThemeLayout>
   </>

  )
}

export default App
