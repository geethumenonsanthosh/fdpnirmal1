import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
      <AppBar> <Toolbar>
      <Typography align='left' sx={{ flexGrow: 1 }}>EMPLOYEEAPP</Typography>
        <Button ><Link to={'/'} style={{textdecoration:'none',color:'white'}}>Home</Link></Button>
        <Button ><Link to={'/add'} style={{textdecoration:'none',color:'white'}}>Add</Link></Button>
      </Toolbar>
       
        </AppBar>
       
    </div>
  )
}

export default Navbar
