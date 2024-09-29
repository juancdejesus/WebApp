import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NavLink } from "react-router-dom";
const drawerWidth = 180;

import NavigationItems from "../settings/Navigation";
const AppDrawer = () => {

    return ( 

        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',
           }
          
        }}
      >
        <Box sx={{ 
                    overflow: 'auto',
                    backgroundColor: 'lightcyan',
                    minHeight : '100vh'
                    
                   }}>
            <Toolbar/>

            <List id="navbar">
            
                {NavigationItems.map((item, index) => (

                <div key={index}>
                {item.label == "Divider" ?
                <Divider/> : 
                <NavLink to={item.link}  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.label}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                }

                </div>
                ))}


                </List>

        </Box>
      </Drawer>


     );
}
 
export default AppDrawer;