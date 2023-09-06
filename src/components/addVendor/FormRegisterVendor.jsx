import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState } from 'react';
import { useGetAllCitesQuery } from '../../api/api'
import {styled} from '@mui/material/styles'
import { Button, Fab, TextField } from '@mui/material';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { AddCircleRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';


const NewTextField = styled(TextField)(
  {
    '& label': {
      fontSize:'13px',
      lineHeight:'.9',
      color:'gray'
    },
    '& .MuiOutlinedInput-input': {
      color: '#555',
      padding:'7px',
      
    },

    '& .MuiOutlinedInput-root':{

      '& fieldset': {
        borderColor: '#ccc',
      
      },

     
    }
  })

const FormRegisterVendor = ({handleSecond}) => {
    const{data:cities, isSuccess, isLoading, isError} = useGetAllCitesQuery()
    const {access} = useSelector(state => state.customer)
    const [name, setName] = useState('');
    const [age, setAge] = useState(''); 
    const [address, setAddress] = useState(''); 
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

    
      const uploadFileHandler = async () => {
        const formData = new FormData();
        const file = new File([logo], `${nanoid()}.png`, {type: 'application/octet-stream'});
        const file2 = new File([banner], `${nanoid()}.png`, {type: 'application/octet-stream'});
        formData.append('logo', file);
        formData.append('city', 1);
        formData.append('profile_image', file2)
        formData.append('name', name)
        formData.append('delivery', age)
        formData.append('address_line1', address)
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
        
          return fileURL.data, handleSecond(); //this is the path of the uploaded file
        } catch (error) {
          console.error(error);
        
        }
      };
    
     

    const handleSubmit = () => {
      uploadFileHandler()
  
    }
  return (
    <form>
    <Grid2 md={6} sx={{
           display:'flex', 
           flexDirection:'column', 
           justifyContent:'center', 
           alignItem:'center', 
        width:'300px' ,  
        
        
      '& > :not(style)': { margin:'10px auto', width: '30ch' },}}>

        <Grid2>
          <lable style={{fontSize:'13px', color:'#555'}}> نام فروشگاه </lable>
        <NewTextField 
        type="text" 
        id="name" 
        value={name} 
        onChange={handleNameChange}
       
        />
        </Grid2>

        <Grid2>
          <lable style={{fontSize:'13px', color:'#555'}}> هزینه تحویل  </lable>
        <NewTextField 
       type="text" 
       id="delivery" 
       value={age} 
       onChange={handleAgeChange} 
        />
</Grid2>

<Grid2>
          <lable style={{fontSize:'13px', color:'#555'}}> آدرس   </lable>
<NewTextField 
        type="text" 
        id="name" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)}
        />

</Grid2>
      
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
    
      <Button type="button" onClick={handleSubmit}>Submit</Button>
   

    </Grid2>
    </form>
  )
}

export default FormRegisterVendor