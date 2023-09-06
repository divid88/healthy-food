
import { isEqual } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MainChoiceCity from '../components/choiceCity/MainChoiceCity'
import SearchSorting from '../components/searchSorting/SearchSorting'
import ShowLocation from '../components/showLocation/ShowLocation'
import { requestAllCities } from '../slice/citySlice'

const Index = () => {
  const [choicCity, setChoiceCity] = useState(false)
    
  const {city} = useSelector(state => state.location)
  const navigate = useNavigate()

  useEffect(() =>  {
    if(city === 0){
      setChoiceCity(true)
    }
  },)

  useEffect(() => {
    if(city !== 0){
      const path = `vendor`
        navigate('/vendors')
    }
    }, [city])

  
   

  return (
  <>
  <MainChoiceCity show={choicCity} />
  <ShowLocation />
    
  <SearchSorting/> 
  </>
  )
}

export default Index
