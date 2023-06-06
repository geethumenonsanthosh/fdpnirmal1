import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = (props) => {
    var[datas,setDatas]= useState(props.data);
    console.log("method:",props.method);
    console.log("updateid:",datas._id)
    const navigate=useNavigate();

    const inputHandler =(e)=>{
        const{name,value} = e.target;
        setDatas((datas)=>({...datas,[name]:value}))
    }

    const addHandler =() =>{
        console.log("clicked")

        if(props.method==='post'){
        axios.post("http://localhost:3005/new",datas)
        .then((response)=>
        {
            alert ("Successfully added")
            navigate('/view');

        })
        .catch(err=>console.log(err))
    }
    if(props.method==='put'){
        axios.put("http://localhost:3005/edit/"+datas._id,datas)
        .then((response)=>{
            alert("updated")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))

    }}
  return (
    <div style={{paddingTop:'80px'}}>
        <TextField label='Name' variant='outlined' onChange={inputHandler}
        name='sname'
        value={datas.sname}/><br/>


        <TextField label='Age' variant='outlined' onChange={inputHandler}
        name='age'
        value={datas.age}/><br/>


        <TextField label='Position' variant='outlined' onChange={inputHandler}
        name='pos'
        value={datas.pos}/><br/>
        <TextField label='Salary' variant='outlined' onChange={inputHandler}
        name='salary'
        value={datas.salary}/><br/>
        <Button variant='contained' onClick={addHandler}>Submit</Button>


      
    </div>
  )
}

export default Add
