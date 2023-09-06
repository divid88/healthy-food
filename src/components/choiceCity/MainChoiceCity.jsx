import { Button, Box, Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { choiceCity} from '../../slice/citySlice'
import { useEffect, useState } from 'react'
import DialogChoiceCity from './DialogChoiceCity'
import { isEqual } from 'lodash'
import {useGetAllCitesQuery} from '../../api/api'
import CircularProgress from '@mui/material/CircularProgress';


const MainChoiceCity = ({show}) => {
  const [userCity, setUserCity] = useState({})
  const {data:all_cities, isSuccess, isLoading, isError} = useGetAllCitesQuery()
  const dispatch = useDispatch()


  const handleChoiceCity = () => {
      dispatch(choiceCity(userCity))
      show = false
  }

    
  return (
    <>
    { isSuccess ?
    <DialogChoiceCity 
    setUserCity={setUserCity}
    userCity={userCity}
    show={show }
    all_cities={all_cities}
    handleChoiceCity={handleChoiceCity}
    />
: isError? <div>
  <Alert severity="error">This is an error alert — check it out!</Alert>
</div>:
  isLoading? 
  
  <Box sx={{ display: 'flex' }}>
      <CircularProgress />
  </Box>
  : null

    }

</>
  )
}

export default MainChoiceCity
