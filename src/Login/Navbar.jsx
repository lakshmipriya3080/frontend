import React, { Component } from 'react'
 import "./NavBarStyles.css";
 import "./HomeStyles.css";


class Navbar extends Component  {
  state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render(){
    
  return (
    
        <div>
        <nav>

         
        
        
        
        <div>
    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar" }>
        <li><a className='active' href='/'>Home</a></li>
        <li><a href='/login' >Login</a></li>
    </ul>
    </div>
    <div id="mobile" onClick={this.handleClick}>
       <i id='bar'
       className={this.state.clicked ?
    'fas fa-times' : 'fas fa-bars' }></i>
       
    </div>
    </nav>
    <div className="home">
        <h1>   TalentHRM</h1>
        <h3>"Talent management is the systematic process of creating and sustaining individual<br></br> competencies that
          will help the business deliver strategy"<br></br><br></br>-Dave Ulrich
        </h3>
      </div>
    </div>
    
  )
}
}

export default Navbar