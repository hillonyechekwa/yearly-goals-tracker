import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.scss';

const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink> 
    </nav>
  )
}

export default Nav
