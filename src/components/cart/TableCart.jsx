import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCartItem, minusCartItem } from '../../slice/cartSlice';


export default function TableCart({cart_items}) {

  const dispatch = useDispatch()
  const handleMuinsCart = (id) => {
    dispatch(minusCartItem(id))
  }

  const handleAddCart = (food) => {
    dispatch(addCartItem({food}))
  }
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table" >
          <TableHead>
            <TableRow>
        
              <TableCell align="right">نام غذا</TableCell>
            
              <TableCell align="right">تعداد</TableCell>
              <TableCell align="right">قیمت </TableCell>
              <TableCell align="right">بالانس</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cart_items.map((item, index) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.qty}</TableCell>
                <TableCell align="right">{item.qty * item.price}</TableCell>
                <TableCell sx={{display:'flex'}} > 
                  <IconButton  value={item} onClick={() => handleAddCart(item)}>
                    <AddCircleOutline color='success'/>
                  </IconButton>
                  <IconButton value={item} onClick={() => handleMuinsCart(item)}>
                    <RemoveCircleOutline  color='warning'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }