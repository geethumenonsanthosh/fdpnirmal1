import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [users,setUsers]=useState([]);
    useEffect(()=>{   axios.get("https://jsonplaceholder.typicode.com/users")
    .then(Response=>{
        console.log(Response)
        setUsers(Response.data)
    })
    .catch(err=>console.log(err))
    },[])
    
      
  return (
    <div style={{paddingTop:'100px'}}>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow >
                    <TableCell>  NAME</TableCell>
                    <TableCell>  AGE</TableCell>
                    <TableCell>  POSITION </TableCell>
                    <TableCell>  SALARY</TableCell>

                </TableRow>
                
            </TableHead>
            <TableBody>
                {users.map((value,index)=>{
                    return(
                        <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.username}</TableCell>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.phone}</TableCell>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
