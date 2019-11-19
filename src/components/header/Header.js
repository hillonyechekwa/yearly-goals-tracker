import React from 'react'
import HeroImg from '../../assets/winner.svg';
import "./header.scss"
import {Link} from 'react-router-dom';


const Landing = () => {
  return (
    <header>
      <div className="wrapper-hero">
        <h1 className="hero-text">
          Let's start setting those goals
        </h1>
      
      <div className="hero-img-wrapper">
        <img src={HeroImg} alt="hero" className="hero-img"/>
      </div>

      </div>
      <Link className="hero-btn-wrapper">
        <button className="hero-btn">get started</button>
      </Link>
    </header>
  )
}

export default Landing


