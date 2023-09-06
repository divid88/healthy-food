import { Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React, {useState} from 'react'
import {styled} from '@mui/material/styles'
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewTextField = styled(TextField)(
    {
     
      '& .MuiOutlinedInput-input': {
        color: '#555',
        padding:'7px',
        
      },
  
      '& .MuiOutlinedInput-root':{
  
        '& fieldset': {
          borderColor: '#ccc',
          color:'#555',
        },
  
       
      }
    })

    
const UpdateHeaderVendor = () => {
    const {access} = useSelector(state => state.customer)
    const [name, setName] = useState('');
    const [age, setAge] = useState(''); 
    const [logo, setLogo] = useState(null);
    const [banner, setBanner] = useState(null)

    const handleNameChange = (event) => {
        setName(event.target.value);
      }
    
      const handleAgeChange = (event) => {
        setAge(event.target.value);
      }
    
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          const binaryFile = new Blob([new Uint8Array(event.target.result)]);
          console.log(binaryFile);
          setLogo(binaryFile)
        });
        // Read the file as binary data
        reader.readAsArrayBuffer(file);
      }
  
      const handleBannerChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          const binaryFile = new Blob([new Uint8Array(event.target.result)]);
          setBanner(binaryFile)
        });
        // Read the file as binary data
        reader.readAsArrayBuffer(file);
  
      }
  
      const handleSubmit = () => {
        uploadFileHandler()
    
      }

      const uploadFileHandler = async () => {
        const formData = new FormData();
        const file = new File([logo], `${nanoid()}.png`, {type: 'application/octet-stream'});
        const file2 = new File([banner], `${nanoid()}.png`, {type: 'application/octet-stream'});
        formData.append('logo', file);
        formData.append('city', 1);
        formData.append('profile_image', file2)
        formData.append('name', name)
        formData.append('age', age)
       console.log(Object.fromEntries(formData));

        try {
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${access}`
            },
          };
          const fileURL = await axios.post(' http://127.0.0.1:8000/vendor/register/', 
                                          Object.fromEntries(formData), config);
        
          return fileURL.data; //this is the path of the uploaded file
        } catch (error) {
          console.error(error);
        
        }
      };
  return (
    <form>
    <Grid2 md={12} sx={{
           display:'flex', 
           flexDirection:'column', 
           justifyContent:'center', 
           alignItem:'center', 
        width:'300px' ,  
        p:2,
        bgcolor:'white',
        
      '& > :not(style)': { marginY:'5px', width: '30ch' },}}>
        <lable style={{fontSize:'12px', color:'#555'}}>
        نام فروشگاه
        </lable>
        <NewTextField 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange}
   
        />
         <lable style={{fontSize:'12px', color:'#555'}}>
         هزینه تحویل 
        </lable>
        <NewTextField 
       type="text" 
       id="delivery" 
       value={age} 
       onChange={handleAgeChange} 
       
        />

<lable style={{fontSize:'12px', color:'#555'}}>
         آدرس:
        </lable>
        <NewTextField 
       type="text" 
       id="delivery" 
       value={age} 
       onChange={handleAgeChange} 
       
        />

<lable style={{fontSize:'12px', color:'#555'}}>
     پلاک:
        </lable>
        <NewTextField 
       type="text" 
       id="delivery" 
       value={age} 
       onChange={handleAgeChange} 
       
        />
      
        <label htmlFor="upload-image">
  <input
    
    id="logo" 
    accept='image/*' 
    onChange={handleImageChange}
    type="file"
  />
   
  {/* <Fab
    color="secondary"
    size="small"
    component="span"
    aria-label="add"
    variant="extended"
  >
    <AddCircleRounded /> آپلود لوگو فروشگاه
  </Fab> */}
  {/* <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button> */}
</label>

<label htmlFor="upload-banner">
    
  <input
   
    id="brand" 
    accept='image/*' 
    onChange={handleBannerChange}
    type="file"
  />


</label>
    
      <Button type="button" variant='outlined' onClick={handleSubmit}>
        اعمال تغییرات
      </Button>
   

    </Grid2>
    </form>
  )
}

export default UpdateHeaderVendor