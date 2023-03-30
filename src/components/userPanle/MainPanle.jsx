import { Logout } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { logout } from '../../slice/customerSlice'
import { Link } from 'react-router-dom';

const MainPanle = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  return (
    <Box sx={{width:'300px', bgcolor:'background.paper' }}>
        <nav>

            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout} disablePadding>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        <ListItemText   primary='خروج'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <Link to='/orders' style={{textDecoration:'none', color:'#333'}}>
                    <ListItemButton disablePadding>
                        <ListItemIcon>
                            <EventAvailableIcon/>
                        </ListItemIcon>
                        <ListItemText   primary='سفارشات شما'/>
                    </ListItemButton>
                    </Link>
                </ListItem>

            </List>
        </nav>

    </Box>
  )
}

export default MainPanle
