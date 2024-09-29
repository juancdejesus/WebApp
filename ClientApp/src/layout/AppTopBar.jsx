import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const navItems = [
  { label: "About",link: "About" },
];

import AppSettings from '../settings/AppSettings';
import { NavLink } from 'react-router-dom';

const AppTopBar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>

        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            {AppSettings.AppIcon}
          </IconButton>

          <Typography variant="h6" noWrap component="div"
                      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
            {AppSettings.ApplicationName}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <NavLink key={index} to={item.link} >
                <Button sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      );
}
 
export default AppTopBar;