import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { CheckCircleOutline, Circle, CircleOutlined } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';


const FilterBox = () => {
  const ckecks = [
    {id: 11, lable:"غذای نیمه آماده"},
    {id: 2, lable:"تحویل رایگان"},
    {id: 1, lable:'رستوران های محبوب من'},
    {id: 4, lable:'تخفیف دار'},
    {id: 5, lable:'رستوران های باز'},
  ]
  const [searchParams, setSearchParams] = useSearchParams()
const [filters, setFilters] = useState([])
const handleSetChecks = (e) =>{
    setSearchParams({'filter': filters})
}

  return (
    <div style={{ md:'20px',}}>
       <FormGroup>
        {ckecks.map(item=>
      <FormControlLabel 

          key={item.id} 
          value={item.id} 
          control={<Checkbox icon={<CircleOutlined/>} checkedIcon={<CheckCircleOutline/>} size="small"/>} 
          label={<Typography variant='subtitle2' sx={{color:'text.secondary'}}> {item.lable}</Typography>} 
          
          onClick={(e) => setFilters([...filters, e.target.value])}
          />
      
      )}
    </FormGroup>
    <Divider sx={{marginY:'10px'}}/>
        <Stack direction="row" spacing={2}>
    <Button variant='outlined' onClick={handleSetChecks}>اعمال فیلتر</Button>
    <Button variant='outlined' sx={{color:'grey.700'}} >کنسل </Button>
    </Stack>
    </div>
  )
}

export default FilterBox
