import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss';

const Nav = () => {
  return (
    <nav className="nav justify-content-center">
    
      <Link className="nav-link" to="/">Home</Link>
      
      <Link className="nav-link" to="/about">About</Link>
      
      <Link className="nav-link" to="/login">Login</Link>
      
      <Link className="nav-link pilled" to="/signup">Sign Up</Link> 
      
    </nav>
  )
}

export default Nav
