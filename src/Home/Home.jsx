import React from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'

import Topbar from '../Topbar/Topbar'




const Home = (props) => {
  return (
    <div>
    <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
    <h2 className='txt'>Home</h2>
    </div>
  )
}

export default Home