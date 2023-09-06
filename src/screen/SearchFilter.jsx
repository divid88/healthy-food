import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SearchSorting from '../components/searchSorting/SearchSorting'
import { useSearchParams } from "react-router-dom";
import { CardMedia, Box, Typography, Card } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"

import SummeryVendor from '../components/vendorMainPage/SummeryVendor';
import { useGetVendorsCitiesQuery } from '../api/api'
import { isEqual } from 'lodash';


const SearchFilter = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const {city, city_name} = useSelector(state => state.location)
  const {data: vendors, isSuccess, isLoading, isError} = useGetVendorsCitiesQuery(city) 
  const params = Object.fromEntries([...searchParams]);

  let resultVendor = []
  if(!isEqual(params.search,undefined)){
    let searchResult = []
    searchResult = vendors.filter(item => 
          {return item.menu.foods.some(food => food.name.includes(params.search) )} )
          resultVendor = searchResult
        }

  if(params.filter){
    const filter = Number(params.filter)

    let filterResult = []

    if(isEqual(filter, 11)){
    filterResult = vendors.filter(item => 
      {return item.menu.foods.some(food => food.category === filter )}
      )}

    if(isEqual(filter, 2)){
      console.log(vendors[0].delivery);
    filterResult = vendors.filter(item => Number(item.delivery) === 0)
      }

    resultVendor = filterResult
        }
    // console.log(vendors)
  return (
<>
    <SearchSorting/>


    <Grid2 container display='flex' sx={{padding:'20px', justifyContent:'center'}}>
        
        <Grid2 md={11} >
            <Typography variant='h5' sx={{color:'GrayText'}}>
                جستجوی {params.search ? params.search : null} در محدوده {city_name}
                </Typography>
        </Grid2>
        
        <Grid2 container md={12} xs={12} display="flex" sx={{marginY: '10px'}} spacing={1} >
        {isSuccess && resultVendor ? <> { resultVendor.map(vendor => (
              <Grid2 md={4} xs={12} key={vendor.id}><SummeryVendor vendor={vendor}/>
              </Grid2>
            ))
            } </>: isError ? <div>error</div>:
            isLoading ?  <Box sx={{ display: 'flex' }}>
                              <CircularProgress />
                         </Box> : null
} 
      

        </Grid2>
    </Grid2>

</>
  )
}

export default SearchFilter
