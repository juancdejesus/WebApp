import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

 
export default function PageNotFound() {
  return (
    

        <Box
      sx={{
        
        marginTop:1
        
      }}
    >
      <Typography variant="h4" style={{ color: 'black' }}>
        Page not found
      </Typography>
      <Typography paragraph style={{ color: 'black', marginTop:10 }}>
        Go to <Link to="/">main page</Link>
      </Typography>
    </Box>

  )
}
