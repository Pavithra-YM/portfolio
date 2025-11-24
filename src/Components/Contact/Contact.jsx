import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react';
export const Contact = () => {
 const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "dcf23094-e3b9-476c-9206-ef6e294cf0c8");
try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
     console.log("web3forms response:", data); 
    // setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    }
    else{
      setResult("Something went wrong, Please try again");
    }
    } catch (err) {
      console.error(err);
      setResult("nwtwork error, please try again later");
    }
  };

  return (
    <div id='contact' className='contact'>
     <div className="contact-title">
       <h1>Get in touch</h1>
        <img src={theme_pattern } alt="" />
    </div>

     <div className="contact-section">
       <div className="contact-left">
        <h1>Let's Talk</h1>
        <p>I'm currently avaliable to take on new project, so feel free</p>

       <div className="contatct-details">
        <div className="contact-detail">
          <img src={mail_icon} alt=""/><p>pavithraym55@gmail.com</p>
        </div>

        <div className="contact-detail">
          <img src={location_icon} alt=""/><p>Banaglore , karnataka INDIA</p>
        </div>

        <div className="contact-detail">
            <img src={call_icon} alt="" /><p>8861943365</p>
         </div>
       </div>
     </div>
   <form onSubmit={onSubmit} className='contact-right'>
   <label htmlFor="">Your Name</label>
   <input type="text"placeholder='Enter your name' name='name'/>
   <label htmlFor="">Your Email</label>
   <input type="text"placeholder='Enter your email' name='email' />
   <label htmlFor="">Write your message here</label>
   <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
   <button type='' className="context-submit">Submit now</button>
     {result && (
    <p className={`form-message ${result.toLowerCase().includes("success") ? "success" : "error"}`}>
      {result}
    </p>
   )}
  </form>
</div> 
</div>
  );
};


export default Contact;