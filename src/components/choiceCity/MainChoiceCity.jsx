import { Button, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { choiceCity, requestAllCities } from '../../slice/citySlice'
import { useEffect, useState } from 'react'
import DialogChoiceCity from './DialogChoiceCity'
import { isEqual } from 'lodash'

const MainChoiceCity = ({show}) => {
  const [userCity, setUserCity] = useState(0)
  const {status, all_cities} = useSelector(state => state.location)
  const dispatch = useDispatch()


  useEffect(()=>{
    if(isEqual(all_cities, [])){
      dispatch(requestAllCities())
    }
  }, [])

  const handleChoiceCity = () => {
      dispatch(choiceCity(userCity))
      show = false
  }
    
  return (
    <DialogChoiceCity 
    setUserCity={setUserCity}
    userCity={userCity}
    show={show }
    all_cities={all_cities}
    handleChoiceCity={handleChoiceCity}
    />
  )
}

export default MainChoiceCity
