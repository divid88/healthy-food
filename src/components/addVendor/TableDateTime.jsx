import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const WEEKDAYS = [
    
    {id:0, name:'دوشنبه'},
    {id:1, name:'سه شنبه'},
    {id:2, name:'چهارشنبه'},
    {id:3, name:'پنجشنبه'},
    {id:4, name:'جمعه'},
    {id:5, name:'شنبه'},
    {id:6, name:'یکشنبه'},
  ]



const TableDateTime = ({dateTime}) => {
  return (
    <Grid2 container md={12}
    sx={{
       margin:'20px auto',
    display:'flex', 
   flexDirection:'column', 
   alignItems:'center'}}>

   <TableContainer component={Paper}>
     <Table  aria-label="simple table">
       <TableHead>
         <TableRow>
           
           <TableCell align="left">روز</TableCell>
           <TableCell align="left">شروع صبح</TableCell>
           <TableCell align="left">پایان صبح </TableCell>
           <TableCell align="left">شروع بعدظهر </TableCell>
           <TableCell align="left">پایان بعدظهر </TableCell>


         </TableRow>
       </TableHead>
       <TableBody>
     {dateTime.map((item) =>(
        
           <TableRow
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             key={item.day}
           >
            { item.open_morning &&
            <>
             <TableCell  scope="row">
                 {WEEKDAYS[item.day].name}
               </TableCell>

               <TableCell>
                 {item.open_morning}
               </TableCell>

               <TableCell>
                 {item.close_morning}
               </TableCell>

               <TableCell>
                 {item.open_afternoon}
               </TableCell>

               <TableCell>
                 {item.close_afternoon}
               </TableCell>
               </>
                    }
           </TableRow>
    
   ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Grid2>

  )
}

export default TableDateTime