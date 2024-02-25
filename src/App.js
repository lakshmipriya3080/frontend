//App.js

import { Route,  Routes, BrowserRouter } from "react-router-dom";
import Myprofile from "./components/Myprofile";
import Employeedetails from "./components/Employeedetails";
import Training from "./components/Training";
import LoginCard from "./Login/LoginCard";
import Login from "./Login/Login";
import UserLogin from "./Login/UserLogin";

import Header from "./components/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

import './App.css';
import Dashboard from "./components/Dasboard";
import Navbar from "./Login/Navbar";
import Home from "./components/Home";
import Employeeview from "./components/Employeeview";
import EmployeeEdit from "./components/EmployeeEdit";
import Viewtraining from "./components/Viewtraining";
import Trainingedit from "./components/Trainingedit";
import PerformancePage from "./components/PerformancePage";





function App() {
  
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}></Route>
      <Route path="/login" element={<LoginCard/>}></Route>
      <Route path='/adlogin'element={<Login method="get"/>}></Route>
      <Route path='/userlogin'element={<UserLogin method="post"/>}></Route>

    </Routes>
<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="Myprofile" element={<Myprofile/>}></Route>
      <Route path="Employeedetails" element={<Employeedetails/>}></Route>
      <Route path="Employeeview" element={<Employeeview/>}></Route>
      <Route path="Employeeedit" element={<EmployeeEdit/>}></Route>
      <Route path="Training" element={<Training/>}></Route>
      <Route path="Viewtraining" element={<Viewtraining/>}></Route>
      <Route path="Trainingedit" element={<Trainingedit/>}></Route>

      

     </Routes>
     </div>

     <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     <Routes>
     <Route path="dash" element={<Home />}></Route>
     <Route path="Myprofile" element={<Myprofile/>}></Route>
     <Route path="Employeedetails" element={<Employeedetails/>}></Route>
     <Route path="Training" element={<Training/>}></Route>

     </Routes>
     </div>
   </BrowserRouter>   
  );
}

export default App;