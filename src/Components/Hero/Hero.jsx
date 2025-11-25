import React from 'react'
import'./Hero.css'
import profile_img from "../../assets/profile_img.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Pavithra Y M </span>
            Software Developer
        </h1>
        <p>I’m a Software Developer at Novaders LLP, Bangalore with 2 years of experience
        in React, Flutter, PHP and Drupal 9. Recently, I built a face recognition-based
        attendance system using Flutter, Google ML Kit and a Flask backend.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            {/* <div className="hero-resume">My resume</div> */}
            <a href="/Pavithra_Y_M.pdf" target='_blank'rel="noreferrer" className="hero-resume">Resume</a>
        </div>
    </div>
  )
}

export default Hero

