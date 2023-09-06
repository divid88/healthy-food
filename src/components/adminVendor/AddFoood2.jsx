import React, {useState} from 'react'
import { Button, Fade, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { FileOpenOutlined } from '@mui/icons-material'
import { nanoid } from '@reduxjs/toolkit'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useSelector } from 'react-redux'
import axios from 'axios'

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


const AddFoood2 = ({vendor}) => {

    const {access} = useSelector(state => state.customer)

    const [foodName, setFoodName] = useState(''); 
    const [footType, setFoodType] = useState(0)
    const [imageFood, setImageFood] = useState(null);
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const handleBannerChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
          const binaryFile = new Blob([new Uint8Array(event.target.result)]);
          setImageFood(binaryFile)
        });
        // Read the file as binary data
        reader.readAsArrayBuffer(file);
  
      }

      const uploadFileHandler = async () => {
        const formData = new FormData();
        const file = new File([imageFood], `${nanoid()}.png`, {type: 'application/octet-stream'});
        formData.append('image', file)
        formData.append('name', foodName)
        formData.append('description', description)
        formData.append('food_type', footType)
        formData.append('price', price)

        try {
            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${access}`
              },
            };
            const fileURL = await axios.post(' http://127.0.0.1:8000/menu/add_food/', 
                                            Object.fromEntries(formData), config);
          
            return fileURL.data; //this is the path of the uploaded file
          } catch (error) {
            console.error(error);
          
          }
        };
      
      

  return (
    <div>

<Grid2 md={12} 
    sx={{
        marginY:'10px',
        p:2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': { marginY:'5px', width: '30ch' }
    }}
    >
            <Select
        sx={{height:'35px', width:'28ch'}}
        value={footType}
        onChange={(e) => setFoodType(e.target.value)}
        >

            <MenuItem value={0}>گروه غذا</MenuItem>
            { vendor && vendor.food_type.map(item=>
            <MenuItem value={item.id}>{item.name}</MenuItem>
            )
            }
        </Select>
<lable style={{fontSize:'14px', color:'#555'}}>نام غذا :  </lable>
        <NewTextField
        value={foodName}
        type='text'
        onChange={(e)=>setFoodName(e.target.value)}
        fullWidth
        />

<lable style={{fontSize:'14px', color:'#555'}}>قیمت غذا :  </lable>
        <NewTextField
        value={price}
        type='number'
        onChange={(e)=>setPrice(e.target.value)}
        />


<lable style={{fontSize:'14px', color:'#555'}}>توضیحات :  </lable>
        <NewTextField
        value={description}
        type='text'
        onChange={(e)=>setDescription(e.target.value)}
        />
    
        <Stack row justifyContent='center'>
        <input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id='imageFood'
                  type="file"
                  onChange={handleBannerChange}
                />
                <label htmlFor='imageFood'>
                  <Button
                    component="span"
                    size="small"
                    startIcon={<FileOpenOutlined />}
                  
                   
                  >
                    آپلود
                    عکس غذا
                  </Button>
                </label>
        </Stack>

        <Button variant='outlined' onClick={uploadFileHandler}>
                ثبت غذا
        </Button>
     </Grid2>
    </div>
  )
}

export default AddFoood2