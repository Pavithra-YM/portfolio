import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.png'
export const About = () => {

  return (
    <div id='about' className='about'>
      <div className="about-title">
         <h1>About me</h1>
         <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I work as a Software Developer at Novaders LLP in Bangalore, where I focus on building
              responsive and user-friendly interfaces for web applications.</p>
                <p>  I enjoy working with modern tools like React, Flutter, PHP and Drupal 9, and I’m
              especially interested in creating clean UI, smooth user journeys and reliable
              frontends that support real business needs</p>
            </div>
            <div className="about-skils">
                <div className="about-skill"><p>Flutter</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>java Script</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>drupal & php</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achievement">
            <h1>2</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>PROJECTS completed</p>
        </div>
        <hr />
        {/* <div className="about-achievement">
            <h1></h1>
            <p>PROJECTS completed</p>
        </div> */}
      </div>
    </div>
  )
}
export default About