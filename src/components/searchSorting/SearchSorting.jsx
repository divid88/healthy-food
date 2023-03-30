import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Box, Button, TextField, Typography } from "@mui/material"
import { MenuBookOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestVendorCitySearch } from "../../slice/vendorsCitySlice"
import FilterButton from "./FilterButton"


const SearchSorting = () => {
  const [searchText, setSearchText] = useState('')
  const {city} = useSelector(state => state.location)
  const dispatch = useDispatch()
 
  const handleSearch = (e) => {
    
    if(e.key === 'Enter'){
      dispatch(requestVendorCitySearch({city, searchText}))
      setSearchText('')
      e.preventDefault()
    }
  }
  return (
    <Grid2 container
    sx={{
    display:'flex',
    justifyContent:'center',
    backgroundColor:'grey.100',
    margin:0,
    padding:'1rem',
 
    borderBottom:'1px solid #eee'}}>
      <Grid2 md={10} display="flex">
       <Grid2 md={10}>
       <Box
      component="form"

      noValidate
      autoComplete="off"
      
    >      

       <TextField
          id="standard-search"
          fullWidth
          inputProps={{ style: { backgroundColor:"white" } }}
          label="جستجوی غذا و رستوران"
          type="search"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearch}
          sx={{
              input:{color: '#888'},

            '& .MuiInputLabel-root':{
                "&.MuiInputLabel-outlined":{
                    color:'#bbb'
                    
                },
               
            },
            '& .MuiOutlinedInput-root': { 

      
                color: 'gray.700', 
                border:'1px solid #ddd' ,
              
                "&:hover fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor:'#ddd' ,
                    color: '#777'
                  },

                  "&.Mui-hovered fieldset": {
                    border:'none' ,
                  },

                  

            },
            
          }}
        />
        </Box>

       </Grid2>

          <FilterButton/>
          </Grid2>

   </Grid2>
  )
}

export default SearchSorting
