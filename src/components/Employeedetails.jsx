//Employeedetails.jsx
import React, { useState } from 'react'

import { Button, FormControlLabel, FormGroup, Switch, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Employeedetails.css'




const Employeedetails = (props) => {

  var [employees,setemployee]=useState({"idd":'',"ename":'',"eage":'',"eadress":'',"status":'ACTIVE'})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setemployee((employees)=>({...employees,[name]:value}))
      console.log(employees)
  }
  
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/new2/",employees)
    .then((response) =>{
    alert("Record Saved")
    navigate('/Employeeview')
    })
    .catch(err=>console.log(err))
    }
  return (
    <div align="center">
      
    <div className="profile-box">

      <h1>ADD EMPLOYEE</h1>

      <TextField  label="ID" variant="filled" name="idd" value={employees.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={employees.ename}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="eage" value={employees.eage}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="status" value={employees.status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      
      
      <br/><br/>
      <br/>
      <Button variant="contained" onClick={savedata} >SUBMIT</Button>
      </div>
    </div>
    
  )
}

export default Employeedetails;