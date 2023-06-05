import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const View = () => {
    var [pname,setname]=useState("Tiya");
    var[val,setval]=useState();
    const changeName=()=>{
        console.log("clicked")
        setname(val)
            }
            const inputHandler=(e)=>{
                console.log(e.target.value)
                setval(e.target.value)
            }
  return (
    <div style={{paddingTop:'70px'}}>
      {/* <h1>EMPLOYEES</h1>
      <Typography variant='h1'>GEETHU</Typography>
      <input placeholder='Name'></input>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br> </br>
      <Button variant="outlined">Outlined</Button> */}
      {/* <h1>EMPLOYEES</h1> */}
      <Typography variant='h1'>WELCOME {pname}</Typography>
      
      <br />
      <TextField label='name'  onChange={inputHandler}/>
       <Button variant="outlined" onClick={changeName}>CHANGE</Button>
    </div>
  )
}

export default View
