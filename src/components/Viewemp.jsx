import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Add from './Add';


const Viewemp = () => {
  var[employees, setEmployees] = useState([]);
  var[onevalue,setonevalue]=useState([]);
  var[edit,setEdit]=useState(false);
  useEffect(()=>{
    axios.get("http://localhost:3005/view")
  .then(response=>{
    console.log(response.data)
    setEmployees(response.data)
  })
  .catch(err=>console.log(err))

  },[])
  const deletevalues=(id)=>{
  console.log("delete clicked",id);
  axios.delete("http://localhost:3005/remove/"+id)
  .then((response)=>{
    alert("data deleted")
    window.location.reload(false);
    // Window.location.reload(false);
  })
  }
  const editvalues=(value)=>{
    console.log("edit clicked",value)
    setonevalue(value);
    setEdit(true)
  }
  var finaljsx= <TableContainer style={{paddingTop:'70px'}}>
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
          
   {employees.map((value,index)=>{
    return(
      <TableRow key={index}>
         {/* <TableCell>{value._id}</TableCell> */}
        <TableCell>{value.sname}</TableCell>
        <TableCell>{value.age}</TableCell>
        <TableCell>{value.pos}</TableCell>
        <TableCell>{value.salary}</TableCell>
        <TableCell><EditIcon color='success' onClick ={()=>editvalues(value)}/>
       </TableCell>
          
        <TableCell>
        <DeleteForeverIcon  color='error' onClick ={()=>deletevalues(value._id)}/>
      
        </TableCell>
      </TableRow>
    )
    })}
      </TableBody>
  </Table>
</TableContainer>
if(edit)
finaljsx=<Add data={onevalue} method='put'/>

return (
  
      
finaljsx
   
  )
}

export default Viewemp

