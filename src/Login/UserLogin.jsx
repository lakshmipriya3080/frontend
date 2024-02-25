//UserLogin.jsx
import React, {  useState } from 'react'
import './login.css';
import {  Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, ThemeProvider, createTheme } from '@mui/material';
 import "./NavBarStyles.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BadgeIcon from '@mui/icons-material/Badge';


const UserLogin = () => {

    const [empid,setEmpId]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');

  
    
     const defaultTheme = createTheme();
     const navigate=useNavigate()


     const handleSubmit = async (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:4005/userlogins', {
        empid : empid ,
        password : password
      })
      .then(res => {
        console.log(res)
        if(res.data === "Success") {
            alert("Login Successfull");
            navigate('/home')
        }
        else{
            setError('Enter valid id and password')
        }
      })
        .catch(err => console.log(err))
      };
      



    
  return (


    <div>
        <nav>
        
            
        
        
        <div>
    <ul id='navbar'>
        <li><a  href='/'>Home</a></li>
        <li><a className='active' href='/adlogin' >Login</a></li>
    </ul>
    </div>
    {/* <div id="mobile" onClick={this.handleClick}>
       <i id='bar'
       className={this.state.clicked ?
    'fas fa-times' : 'fas fa-bars' }></i>
       
    </div> */}
    </nav>
    <div  className='home'>
      <div className='cc'>
    
    <ThemeProvider  theme={defaultTheme} >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            
          }}
        />
        <form onSubmit={handleSubmit}>
         <p className='bb'> <BadgeIcon color='primary' fontSize='large'/></p>
          
          
      <h1 align='center'>EMPLOYEE LOGIN</h1>
       <TextField  margin="normal" required fullWidth id="EMP ID" label="EMP ID" name="id" 
                autoComplete="id"  autoFocus  value={empid}
                onChange={(e) => setEmpId(e.target.value)} /><br/>



       
      <TextField  margin="normal" required fullWidth name="password" label="Password" type="password" id="password" 
                autoComplete="current-password"  value={password}
                onChange={(e) => setPassword(e.target.value)}  /><br/>



     
      <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />          

                
      <Button type="submit" fullWidth variant="contained"  sx={{ mt: 3, mb: 2}} >LOG IN</Button> 
      {error && <p style={{ color: 'red' }}>{error}</p>}

      </form>
      </Container> 
      </ThemeProvider>
      </div>
     
    </div>
    </div>
  )
}

export default UserLogin