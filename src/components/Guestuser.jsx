import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

import Topbar from '../Topbar/Topbar'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Guestuser = (props) => {
  var [guestuser,setguestuser]=useState({"idd":'',"gname":'',"gage":'',"gaddress":'',"gstatus":''})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.guestuser
      setguestuser((guestuser)=>({...guestuser,[name]:value}))
      console.log(guestuser)
  }
  
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/new3/",guestuser)
    .then((response) =>{
    alert("Record Saved")
    navigate('/guestView')
    })
    .catch(err=>console.log(err))
    }
  return (
    <div>
      <div className='bb'>
      <div className='div'>
      <div >
    <Topbar xxx={props.checkLogout}/>
    </div>
      <h1>Guestuser Details</h1>
      <TextField  label="ID" variant="filled" name="idd" value={guestuser.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="gname" value={guestuser.gname}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="gage" value={guestuser.gage}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Address" variant="filled" name="gaddress" value={guestuser.gaddress}  onChange={inputhandler} /><br/><br/>
      <TextField  label="Status" variant="filled" name="gactive" value={guestuser.gstatus}  onChange={inputhandler} /><br/><br/>
      
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
      </div>
      
    </div>
  )
}

export default Guestuser