import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import EmployeeEdit from './EmployeeEdit';
const Employeeview = (props) => {
    var[employee,setEmployee] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:4005/employeeview/")
        .then(response =>{
            console.log(response.data)
            setEmployee(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:4005/remove2/"+id)
    .then((response)=>{
        alert("DELETED")
    window.location.reload(false);
    })
}

const updatevalues =(value)=>{
console.log("updated",value);
setSelected(value);
setUpdate(true);
}
var result=
<div align='center'>
<div className='emp'>

<Typography ><b className='head'>EMPLOYEE VIEW</b></Typography><br/><br/>
<TableContainer component={Paper}>
<Table >
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell >Name</TableCell>
      <TableCell >Age</TableCell>
      <TableCell >Status</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {employee.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.idd}</TableCell>
                  <TableCell>{value.ename}</TableCell>
                  <TableCell>{value.eage}</TableCell>
                  <TableCell>{value.status}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>
</div>
if(update)
      {
        result=<EmployeeEdit data={selected} method='put'/>
      }
  return (result)
}

export default Employeeview