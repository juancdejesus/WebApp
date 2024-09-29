import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import AppDrawer from './AppDrawer';
import AppTopBar from './AppTopBar';
import AppSettings from '../settings/AppSettings';
import AppContent from './AppContent';

export default function RootLayout() {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F3F6F9', minHeight: '100vh',}}>
      <CssBaseline />
      <AppTopBar/>
      {AppSettings.ShowDrawer && <AppDrawer/> }
      <AppContent/>
    </Box>
  );
}
