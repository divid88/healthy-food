import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import GradingIcon from '@mui/icons-material/Grading';
import { useSearchParams } from 'react-router-dom';
import styled from "@emotion/styled";
import { Check, NewReleases, StarBorderOutlined, Timelapse } from '@mui/icons-material';

const SortBox = () => {
  const [searchParam, setSearchParams] = useSearchParams()




  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   
      <Button  
  
        endIcon={Number(searchParam.get('sort')) === 101 &&<Check sx={{color:'orange'}}/>} 
        startIcon={<NewReleases />} 
          sx={{
            width:'200px',
            color:'text.secondary'
          }}
          value={101}
          onClick = {(e) => setSearchParams({sort: e.target.value})}
          >
           جدیدترین ها
      </Button>

      <Button  
  
  endIcon={ Number(searchParam.get('sort')) === 102 &&<Check sx={{color:'orange'}}/>} 
  startIcon={ <GradingIcon/>} 
    sx={{
      width:'200px',
      color:'text.secondary'
    }}
    value={102}
    onClick = {(e) => setSearchParams({sort: e.target.value})}
    >
      پرسفارش ترین
</Button>


<Button  
  
  endIcon={Number(searchParam.get('sort')) === 103 && <Check sx={{color:'orange'}}/>} 
  startIcon={<FilterTiltShiftIcon/>} 
    sx={{
      width:'200px',
      color:'text.secondary'
    }}
    value={103}
    onClick = {(e) => setSearchParams({sort: e.target.value})}
    >
      کمترین فاصله
</Button>
    
  
<Button  
  
  endIcon={Number(searchParam.get('sort')) === 104 && <Check sx={{color:'orange'}}/>} 
  startIcon={<StarBorderOutlined/>} 
    sx={{
      width:'200px',
      color:'text.secondary'
    }}
    value={104}
    onClick = {(e) => setSearchParams({sort: e.target.value})}
    >
      رتبه رستوران 
</Button>
    
    
  </Box>
  )
}

export default SortBox
