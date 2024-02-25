//Sidebar.jsx
import React from 'react'
import 
{BsPersonGear,BsGrid1X2Fill,  BsPersonFillCheck, BsPeopleFill, 
    BsPersonVcard }
 from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function UserSidebar({openSidebarToggle, OpenSidebar}) {


    const navigate = useNavigate();


    const handleLogout = () => {
      navigate('/adlogin');
      console.log('Logout clicked');
    };
  
  
    const fontSizeStyle = { fontSize: '1rem' }; 
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               <BsPersonGear/>  TalentHRM
                            </div>
            <span className='icon close_icon' onClick={OpenSidebar}></span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/dash">
                    <BsGrid1X2Fill className='icon' /> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Myprofile">
                    <BsPersonVcard className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Employeedetails">
                    <BsPeopleFill  className='icon'/> Employee Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Training">
                    <BsPersonFillCheck className='icon'/> Training
                </a>
            </li>
            <li >
            <button onClick={handleLogout} style={fontSizeStyle} >
                  <ExitToAppIcon fontSize="small" /> Logout
                </button>
              
            </li>
        </ul>
    </aside>
  )
}

export default UserSidebar
