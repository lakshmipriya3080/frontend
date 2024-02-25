//Login.jsx
import React, {  useState } from 'react'
import './login.css';
import {  Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, ThemeProvider, createTheme } from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
 import "./NavBarStyles.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

    const [hrid,setHrId]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState('');

  
    
     const defaultTheme = createTheme();
     const navigate=useNavigate()


     const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:4005/logins', {
          hrid: hrid,
          password: password,
        });
  
        if (response.data.success) {
          alert('Login successful');
          console.log(response.data);
          navigate('/dashboard');
        } else {
          setError('Invalid HR ID or Password. Please try again.');
          console.log(response.data);

        }
      } catch (err) {
        setError('Error occurred during login. Please try again.');
      }
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
         <p className='bb'> <AdminPanelSettingsSharpIcon color='primary' fontSize='large'/></p>
          
          
      <h1 align='center'>ADMIN LOGIN</h1>
       <TextField  margin="normal" required fullWidth id="HR ID" label="HR ID" name="id" 
                autoComplete="id"  autoFocus  value={hrid}
                onChange={(e) => setHrId(e.target.value)} /><br/>



       
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

export default Login