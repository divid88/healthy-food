import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { AppBar, Box, Button, Container, IconButton, TextField , Fade, Slide, Collapse, Zoom} from "@mui/material"
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useState, forwardRef, useRef, useEffect } from 'react';
import { useDispatch} from "react-redux"

import { Sort } from "@mui/icons-material";

import DialogFilter from '../../components/searchSorting/DialogFilter'
import { isEqual } from "lodash";


const SearchSorting = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [profile, setProfile] = useState(false)
  const [searchText, setSearchText] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = Object.fromEntries([...searchParams]);
  const catMenu = useRef(null)


  const handleSearch = () => {
      setSearchParams(searchText)
      if(!isEqual(searchText, {})){
        navigate({
          pathname: '/search',
          search: `?search=${searchText.search}`
        })
      }else{
        navigate('/search')
      }

    }
  
    const location = window.location.pathname

    const MyComponent = forwardRef((props, ref) => {
      return (
        <div {...props} ref={ref} >
          <DialogFilter/>
        </div>
      );
    });


      useEffect(()=>{

        const closeOpenProfile = (e)=>{
            if(catMenu.current && profile && !catMenu.current.contains(e.target)){
                setProfile(false)
            }
        }

        document.addEventListener('mousedown',closeOpenProfile)

        return ()=> {
            document.addEventListener('mousedown',closeOpenProfile)
        }

      }, [catMenu, profile])

  return (
    <AppBar position="sticky" 
    sx={{
      top:'0', 
      left:'10%', 
      bgcolor:'rgba(0,0,0,.01)',
      p:1
      
       }}>
 
    
   <Container >
    <Grid2 container justifyContent='center'>
       <Grid2 md={10} xs={10}>
       <Box
      component="form"
       position='relative'
      noValidate
      autoComplete="off"
    >       

        <TextField
          id="standard-search"
          fullWidth
          inputProps={{ style: { backgroundColor:"white" } }}
          label="&nbsp; &nbsp;  جستجوی غذا و رستوران"
      
          type="text"
          variant="outlined"
          value={searchText.search}
          onChange={(e) => setSearchText({search: e.target.value})}
          
          sx={{
              input:{color: '#888',    borderRadius:'5px',},
              
            '& .MuiInputLabel-root':{
                "&.MuiInputLabel-outlined":{
                    color:'#bbb',
                    borderRadius:'5px',
                },
               
            },
            '& .MuiOutlinedInput-root': { 

                borderRadius:'5px',
                color: 'gray.700', 
              
              
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
              <IconButton type="button" 
              onClick={handleSearch}
              sx={{ 
                marginTop:'5px',
                p: '10px',
                position:'absolute',
                zIndex:10,
                top:0,
                fontSize:'30px', 
                bgcolor:'grey.100',
                right:2 }} aria-label="search">
        <SearchIcon fontSize="25px"/>
      </IconButton>
      
      {location.startsWith('/search') && 
          <IconButton 
          onClick={()=> setProfile(()=> true)}
          sx={{ 
            marginTop:'5px',
            p: '10px',
            position:'absolute',
            zIndex:10,
            top:0,
            fontSize:'30px', 
            right:'52px',
            bgcolor:'grey.100', }}
            
            >
              <Sort fontSize="25px"/>
          </IconButton>
      }
 <Zoom in={profile} ref={catMenu}  timeout={100}style={{ transitionDelay: profile ? '200ms' : '0ms' }}>
        <MyComponent/>
        </Zoom>
        </Box>
        </Grid2>
    
                
                 </Grid2>
        </Container>
     
   </AppBar>
  )
}

export default SearchSorting
