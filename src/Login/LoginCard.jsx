//LoginCard.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./NavBarStyles.css";
import { useNavigate } from 'react-router-dom';


export default function LoginCard() {

    const navigate=useNavigate()

    const movedata =()=> {

    navigate('/adlogin')
    }

    const userdata =()=> {

      navigate('/userlogin')
      }
  

  return (
    <div>

        <nav>
        
        
        <div>
    <ul id='navbar'>
        <li><a  href='/'>Home</a></li>
        <li><a className='active' href='/login' >Login</a></li>
    </ul>
    </div>
    </nav>

    <div style={{display: 'flex', flexDirection: 'row' }} className='home' >
    <div >

     <Card sx={{ width: 345 ,height: 400, marginRight: 20}} className='background'>
      <CardMedia
        component="img"
        alt="admin"
        height="260"
        image="https://i.pinimg.com/564x/80/29/53/8029531c433b7d0e2bf48ca6429ef325.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Admin 
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button  variant="outlined" color="success" size="medium" onClick={movedata}>LogIn</Button>
        
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
    <div>
   <Card sx={{ width: 345,height: 400,marginLeft:20 }} className='background'>
      <CardMedia
        component="img"
        alt="employee"
        height="260"
        image="https://i.pinimg.com/564x/32/da/bd/32dabdb83c4fe1be1929f52bb8e328a4.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Employee
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="success"size="medium" onClick={userdata}>LogIn</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
    
    </div>
    </div>
  );
}