import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Divider } from '@mui/material';


const FilterBox = () => {
  return (
    <div style={{textAlign:'center'}}>
       <FormGroup>
      <FormControlLabel control={<Checkbox />} label="غذای نیمه آماده" />
      <FormControlLabel  control={<Checkbox />} label="محبوب تر" />
      <FormControlLabel  control={<Checkbox />} label="پرسفارش ترین" />
      <FormControlLabel  control={<Checkbox />} label="تحویل رایگان" />
    
    </FormGroup>
    <Divider sx={{marginY:'10px'}}/>
    <Button variant='outlined' >اعمال فیلتر</Button>
    </div>
  )
}

export default FilterBox
