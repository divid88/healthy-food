import { AddCircleOutline } from '@mui/icons-material'
import { Button, Fab, MenuItem, Select, Table, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import TableDateTime from './TableDateTime'
import { isEqual } from 'lodash'
import { useCreateTimeVendorMutation } from '../../api/api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MORNING_TIME = [
                      '7:00', '7:30', 
                      '8:00', '8:30', 
                      '9:00', '9:30', 
                      '10:00', '10:30', 
                      '11:00', '11:30', 
                      '12:00', '12:30', 
                      '13:00', '13:30', 
                      '14:00', '14:30',
                      '15:00', '15:30',
                    ]

const AFTERNOON_TIME = [
                        '16:00', '16:30', 
                        '17:00', '17:30', 
                        '18:00', '18:30', 
                        '19:00', '19:30', 
                        '20:00', '20:30',
                        '21:00', '21:30', 
                        '22:00', '22:30',
                      ]


const WEEKDAYS = [
                  {id:5, name:'شنبه'},
                  {id:6, name:'یکشنبه'},
                  {id:0, name:'دوشنبه'},
                  {id:1, name:'سه شنبه'},
                  {id:2, name:'چهارشنبه'},
                  {id:3, name:'پنجشنبه'},
                  {id:4, name:'جمعه'},
                ]

const FormSetTime = () => {
  const [day, setDay] = useState(-1)
  const [morningS, setMorningS] = useState('first')
  const [morningE, setMorningE] = useState('first')
  const [afternoonS, setAfternoonS] = useState('first')
  const [afternoonE, setAfternoonE] = useState('first')
  const navigate = useNavigate()

  const {access} = useSelector(state => state.customer)
  const [tableDate, setTableDate] = useState([


{day: 0, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 1, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 2, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 3, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 4, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 5, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
{day: 6, open_morning: '', close_morning: '', open_afternoon: '', close_afternoon: ''},
  ])

  const handleAddDateTime = () => {
    if( day !== -1, morningE !== 'frist', afternoonS !== 'first'){
      setTableDate(prevState =>{
        const newDate = [...prevState];
        newDate[day] = {
                        day: day, 
                        open_morning: morningS, 
                        close_morning: morningE,
                        open_afternoon: afternoonS,
                        close_afternoon: afternoonE
        
                      }
                      return newDate
      })
  }
}

  let morningChoices = []
  if(morningS !== 'first'){
  const morningChoice = MORNING_TIME.indexOf(morningS)
  morningChoices = MORNING_TIME.slice(morningChoice + 1)

  }

  let afternoonChoice = []
  if(afternoonS !== 'first'){
    const morningChoice = AFTERNOON_TIME.indexOf(afternoonS)
    afternoonChoice = AFTERNOON_TIME.slice(morningChoice + 1)
    
    }

    
    const [addTimeWork, {data:vendorData, isSuccess, isError}] = useCreateTimeVendorMutation()
    let errorCheck = false
  const checkSpaceElement = () => {
      
     const emptyObj = tableDate.filter(obj => 
      Object.values(obj).some(field => isEqual(field, null) || isEqual(field, '') || isEqual(field,undefined))
    )
 
    if(emptyObj.length === 0){
      handleRequest({tableDate, access})
      setTimeout(() => {
        navigate("/admin_vendor")
        
      }, 200);
    }else{
      errorCheck = true
    }
  }

  const handleRequest = async(data) => {
    try{
       await addTimeWork(data)

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>

<Grid2 md={12} xs={12}
sx={{
           display:'flex', 
           flexDirection:'column', 
           justifyContent:'center', 
           alignItem:'center', 
        width:'300px' ,  
      
        
      '& > :not(style)': { margin:'10px auto', marginX:'3px' },}}>
        <Grid2 md={12}>
          <Typography sx={{color:'grey.900'}}>
            تنظیم جدول زمانی ارائه سرویس
          </Typography>

          <TableDateTime dateTime={tableDate}/>
         <Typography sx={{color:'red'}}>
          {errorCheck}
         </Typography>
        </Grid2>

        <Grid2 container>
          <Select 
          value={day}
          onChange={(e)=> setDay(e.target.value)}
          >
                <MenuItem value={-1}>
                <em>روزهای هفته:</em>
                </MenuItem>
            {WEEKDAYS.map(day => 
                <MenuItem value={day.id}>{day.name}</MenuItem>
              )}
          </Select>
          
          <Select 
          value={morningS}
          onChange = {(e) => setMorningS(e.target.value )}
          >
                <MenuItem value={"first"}>
               شروع صبح 
                </MenuItem>
            {MORNING_TIME.map((time)=> 
                <MenuItem value={time}>{time}</MenuItem>
              )}
          </Select>
          
          <Select 
          value={morningE}
          onChange = {(e) => setMorningE(e.target.value )}
          >
                <MenuItem value={"first"}>
               پایان صبح 
                </MenuItem>
            {morningChoices.map((time)=> 
                <MenuItem value={time}>{time}</MenuItem>
              )}
          </Select>
          

          <Select 
          value={afternoonS}
          onChange = {(e) => setAfternoonS(e.target.value )}
          >
                <MenuItem value={"first"}>
                شروع بعدظهر
                </MenuItem>
            {AFTERNOON_TIME.map((time)=> 
                <MenuItem value={time}>{time}</MenuItem>
              )}
          </Select>

          <Select 
          value={afternoonE}
          onChange = {(e) => setAfternoonE(e.target.value) }
          >
                <MenuItem value={"first"}>
                پایان بعدظهر
                </MenuItem>
            {afternoonChoice.map((time)=> 
                <MenuItem value={time}>{time}</MenuItem>
              )}
          </Select>

            <Fab variant='outlined'  onClick={handleAddDateTime}>
              <AddCircleOutline/>
            </Fab>
        </Grid2>

</Grid2>
<Button variant='outlined' onClick={checkSpaceElement}>ثبت</Button>
    </div>
  )
}

export default FormSetTime