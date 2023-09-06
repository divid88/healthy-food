import { Collapse, Container, Fade, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import FormRegisterVendor from './FormRegisterVendor'
import FormSetTime from './FormSetTime'

const MainAddVendor = () => {
  const [secondStep, setSecondStep] = useState(false)
  
  const handleSecond = () => {
    setSecondStep(!secondStep)
  }
  return (
    <Container>
        <Grid2 bgcolor={'white'} sx={{p:2, marginY:'20px'}}>
          <Typography textAlign={'center'}>
            فرض ما بر این است که قبلا مدارک رستوران یا تهیه غذا چک شده است.
          </Typography>
        </Grid2>

        <Grid2 bgcolor={'white'} sx={{p:2, marginY:'20px'}}>
          <Typography variant='subtitle2' color='grey.900'>
            ابتدا اطلاعات و نوع سرویس دهی رستوران خود را ثبت کنید.
          </Typography>

            <Grid2 display={'flex'} justifyContent={'center'} >
            <Collapse in={!secondStep}>
                <FormRegisterVendor handleSecond={handleSecond}/>
                </Collapse>
            </Grid2>
            <Grid2 display={'flex'} justifyContent={'center'} >
            <Collapse in={secondStep} >
              <FormSetTime/>
            </Collapse>
            </Grid2>
        </Grid2>
    </Container>
  )
}

export default MainAddVendor