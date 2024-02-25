import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Recruitmentedit from './Recruitmentedit';
const Recruitmentview = (props) => {
    var[recruitment,setrecruitment] = useState([]);
    var[selected,setSelected] = useState();
    var[update,setUpdate] = useState(false);


    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:4005/recruitmentview/")
        .then(response =>{
            console.log(response.data)
            setrecruitment(response.data)
        })
        .catch(err=>console.log(err))
    },[])

const deletevalues =(id)=>{
    console.log("deleted",id)
    axios.put("http://localhost:4005/remove1"+id)
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
<div className='bb'>
<div >
    <Topbar xxx={props.checkLogout}/>
    </div>
<Typography >Vacancy Details</Typography><br/><br/>
<TableContainer component={Paper}>
<Table >
  <TableHead>
    <TableRow>
    <TableCell >Job ID</TableCell>
      <TableCell >Job Position</TableCell>
      <TableCell >Job Description</TableCell>
      <TableCell >Eligibility</TableCell>
      <TableCell >Status</TableCell>
      <TableCell>Edit</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
      {recruitment.map((value,index)=>{
          return(
              <TableRow key={index}>
                 <TableCell>{value.idd}</TableCell>
                  <TableCell>{value.jobposition}</TableCell>
                  <TableCell>{value.jobdetails}</TableCell>
                  <TableCell>{value.eligibility}</TableCell>
                  <TableCell>{value.Status}</TableCell>
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
        result=<Recruitmentedit data={selected} method='put'/>
      }
  return (result)
}

export default Recruitmentview