import { Box } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const MexrentLayout = ({ children }) => {
  return (
    <>
        <Navbar/>
        
        <Box
            component='main'
            sx={{
                margin: 0,
                flex: 1,
            }}
        >
            { children }
        </Box>
    </>
  )
}
