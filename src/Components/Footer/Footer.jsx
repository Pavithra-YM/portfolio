import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
export const  Footer = () => {
  return (
    <div className='footer' >
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" />
            <p></p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
                </div>
                   <div className="footer-subscrib">Subscrib</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="foorer-bottom-left">Turning ideas into clean UI · Pavithra Y M</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>privacy policy</p>
            <p>connect with me</p>
        </div>

      </div>
    </div>
  )
}
export default Footer

