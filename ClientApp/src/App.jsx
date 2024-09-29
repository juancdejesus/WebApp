import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Button from '@mui/material/Button';

import { RouterProvider } from "react-router-dom";
import { router } from "./settings/Routes";



function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
