import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';

const GuestEdit = (props) => {
   
        var[guestuser,setGuestuser]=useState(props.data)
    
    const navigate =useNavigate();
    
    
    const guestuserhandler =(event)=>{
        const {name,value}=event.target
        setGuestuser((guestuser)=>({...guestuser,[name]:value}))
        console.log(guestuser)
    }  
     const saveData =()=>{
        
        if
        (props.method==="put")
        {
            axios.put("http://localhost:4005/guestuseredit/"+guestuser._id,guestuser)
            .then((response)=>{
                alert("updated")
                window.location.reload(false)
            })
            .catch(err=>console.log(err))
        }
     }
     
  return (
    <div>
    <div className='div'>
   
      <h1>Guestuser  Status</h1>
      <TextField  label="ID" variant="filled" name="idd" value={guestuser.idd} onChange={guestuserhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="gname" value={guestuser.gname}  onChange={guestuserhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="gage" value={guestuser.gage}  onChange={guestuserhandler} /><br/><br/>
      <TextField  label="Address" variant="filled" name="gaddress" value={guestuser.eaddress}  onChange={guestuserhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="status" value={guestuser.estatus}  onChange={guestuserhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" >SUBMIT</Button>
    </div>
</div>

  )
}

export default GuestEdit