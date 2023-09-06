import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { Card, CardMedia, Box, Typography} from '@mui/material';

import { useGetCategoryQuery } from '../../api/api';
import { Link } from 'react-router-dom';

const Category = () => {
    const theme = useTheme()
    const StyledCard = styled(Card)`
cursor: pointer;
margin:5px;
borderRadius:20px;
overflow:hidden;
box-shadow:2px 2px 5px gray;
transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
&:hover {
  transform: scale(1.02);
}
`;
    const {data:categories, isSuccess, isLoading, isError} = useGetCategoryQuery()
  return (
    <Grid2 md={10} container justifContent='center' margin='30px auto'>
            <Grid2 md={11} >
            <Typography variant='h5' sx={{color:'GrayText'}}>
            دسته های محبوب 
                </Typography>
        </Grid2>

        <Grid2 container md={12} xs={12} display="flex" 
        sx={{marginY: '10px', justifyContent:'space-around'}} >
            {isSuccess && categories.map(category => 
        (<Grid2 md={2.3} key={category.id}>
            <Link to={`/search?search=${category.name}`}>
            <StyledCard  sx={{borderRadius:'10px', position:'relative'}}>
        <CardMedia
        
      component="img"
      height="120"
      image={category.image}
    />
        <Box
      sx={{
        position: 'absolute',
        top:0,
        right:0,
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.30)',
        color: 'white',
        padding: '10px',
      }}
    ><Typography>{category.name}</Typography></Box>
    </StyledCard>
    </Link>
    </Grid2>)
    )}
    </Grid2>
    </Grid2>
  )
}

export default Category