import  {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { isEqual } from 'lodash';


export default function DialogChoiceCity({
                                        show, 
                                        all_cities, 
                                        setUserCity, 
                                        userCity, 
                                        handleChoiceCity}) {
 
  const[openChoiceCityDialog, setOpenChoiceCityDialog] = useState(true)

  const handleSetCity = (e) => {
    const city = all_cities.find(item => item.id === Number(e.target.value))

    setUserCity({city})
  }
  
  return (
    <div>
      <Dialog
        open={show}
        keepMounted

        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{fontSize:'1rem', color:'gray.700'}}>{"شهر خود را انتخاب کنید."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Box sx={{ margin:'40px'}}>
  { 
  all_cities.map((city, index )=> (
   
   <Button 
   variant='outlined'
   key={city.id}  
   sx={{margin:'5px'}}
   value={city.id}
   name={city.name}

    onClick={(e) => handleSetCity(e)}
    
   >

      {city.name}
      </Button>))
      }
   </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
       
          <Button 
          
          disabled={isEqual(userCity, 0) ? true : false} 
          variant='contained'
          onClick={handleChoiceCity}
          >
            انتخاب شهر</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}