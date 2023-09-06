import { Button, Fade, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import { useCreateTypeFoodVendorMutation, useGetCategoryQuery } from '../../api/api'
import styled from '@emotion/styled'

import { useSelector } from 'react-redux'

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

const AddFood = () => {
    const {data:categories, isSuccess:categorySuccess} = useGetCategoryQuery()
    
    const [addTypeFood, 
        {data:typeFoodVendor, 
        isSuccess:typeIsSuccess, 
        isError}] = useCreateTypeFoodVendorMutation()

    const {access} = useSelector(state => state.customer)
    const [category, setCategory] = useState(0)
    const [typeFood, setTypeFood] = useState('');
    const data = {"category":category, "name": typeFood}

    const handleAddTypeFood = async() => {
        try{
            await addTypeFood({data, access})
        }catch(error){
            console.log(error)
        }
    }

  
    return (

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
        sx={{height:'35px'}}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >

            <MenuItem value={0}>گروه غذا</MenuItem>
            {categorySuccess && categories.map(item=>
            <MenuItem value={item.id}>{item.name}</MenuItem>
            )
            }
        </Select>


       
 
            <lable style={{fontSize:'14px', color:'#555'}}>نام گروه در منو شما :  </lable>
        <NewTextField
        value={typeFood}
        onChange={(e)=>{setTypeFood(e.target.value)}}
        />

        <Button onClick={handleAddTypeFood}>اضافه کردن</Button>

        <Grid2>
            <Typography>
                گروه های شما
            </Typography>

        </Grid2>
  
{/* 
 
<lable style={{fontSize:'14px', color:'#555'}}>نام غذا :  </lable>
        <NewTextField
        value={foodName}
        onChange={(e)=>setFoodName(e.target.value)}
        />

<lable style={{fontSize:'14px', color:'#555'}}>توضیحات :  </lable>
        <NewTextField
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
    
        <Stack row justifyContent='center'>
        <input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id='imageFood'
                  type="file"
                  value={imageFood}
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
     */}
    </Grid2>

  

  )
}

export default AddFood