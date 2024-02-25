import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';

const Recruitmentedit = (props) => {
   
        var[recruitment,setrecruitment]=useState(props.data)
    
    const navigate =useNavigate();
    
    
    const recruitmenthandler =(event)=>{
        const {name,value}=event.target
        setrecruitment((recruitment)=>({...recruitment,[name]:value}))
        console.log(recruitment)
    }  
     const saveData =()=>{
        
        if
        (props.method==="put")
        {
            axios.put("http://localhost:4005/recruitmentedit/"+recruitment._id,recruitment)
            .then((response)=>{
                alert("updated")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
     }
     
  return (
    <div>
    <div className='div' align="center">
    <div >
    <Topbar xxx={props.checkLogout}/>
    </div>
      <h1>Employee Training Status</h1>
      <TextField  label=" Job ID" variant="filled" name="idd" value={recruitment.idd} onChange={recruitmenthandler}/><br/><br/>
      <TextField  label="Job Position" variant="filled" name="jobposition" value={recruitment.jobposition} onChange={recruitmenthandler}/><br/><br/>
      <TextField  label="Job Description" variant="filled" name="jobdetails" value={recruitment.jobdetails}  onChange={recruitmenthandler}/><br/><br/>
      <TextField  label="Eligibility" variant="filled" name="eligibility" value={recruitment.eligibility}  onChange={recruitmenthandler} /><br/><br/>
      
      Status: &nbsp;&nbsp;
      <select name="Status" value={recruitment.Status}  onChange={recruitmenthandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" onClick={saveData}>SUBMIT</Button>
    </div>
</div>

  )
}

export default Recruitmentedit