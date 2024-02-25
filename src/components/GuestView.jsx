import React, { useEffect, useState } from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import GuestEdit from './GuestEdit';
import axios from 'axios';
import Topbar from '../Topbar/Topbar';
const GuestView = (props) => {
    var[guestuser,setGuestuser] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:4005/guestuserview/")
        .then(response =>{
            console.log(response.data)
            setGuestuser(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:4005/remove3/"+id)
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
<div>
<div >
    <Topbar xxx={props.checkLogout}/>
    </div>
<Typography >Guestuser Details</Typography><br/><br/>
<TableContainer component={Paper}>
<Table >
  <TableHead>
    <TableRow>
      <TableCell >ID</TableCell>
      <TableCell >Name</TableCell>
      <TableCell >Age</TableCell>
      <TableCell >Address</TableCell>
      <TableCell >Status</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {guestuser.map((value,index)=>{
          return(
              <TableRow key={index}>
                  <TableCell>{value.idd}</TableCell>
                  <TableCell>{value.gname}</TableCell>
                  <TableCell>{value.gage}</TableCell>
                  <TableCell>{value.gadress}</TableCell>
                  <TableCell>{value.gstatus}</TableCell>
                  <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                  <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
              </TableRow>
          )
      })}
  </TableBody>
</Table>
</TableContainer>
</div>
if(update)
      {
        result=<GuestEdit data={selected} method='put'/>
      }
  return (result)
}

export default GuestView