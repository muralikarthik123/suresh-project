import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


import './Footer.css';

function Footer() {




  const openWhatsApp = () => {
    const phoneNumber = "8639023948"; // Replace with the actual phone number
    const message = "Thank you for contacting"; // The default message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); // Opens WhatsApp link in a new tab
  };


  const [isUp, setIsUp] = useState(true);

  const handleClick = () => {
    if (isUp) {
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // This makes it smooth
      });
    } else {
      // Scroll to bottom of the page
      window.scrollTo({
        top: document.documentElement.scrollHeight, // Scroll to the bottom
        behavior: 'smooth',
      });
    }
    setIsUp(!isUp); // Toggle arrow icon state
  };





  return (
    <div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">BYC
          <br />(BUILD YOUR CARRER)</h2>
          <div className="social-icons">
           
            <FaFacebook className='ico'/>
            <FaSquareTwitter className='ico'/>
            <IoLogoYoutube className='ico'/>
            <IoLogoInstagram className='ico'/>
            <FaLinkedin className='ico'/>

          </div>
          <div className="app-download">
          <p>© 2024 Build Your Carrer (BYC) Pvt. Ltd.</p>
            
          </div>
          
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>POPULAR TESTS</h4>
            <ul>
              <li>Business Development Test</li>
              <li>Business Analytics Test</li>
              <li>Frontend Development Test</li>
              <li>Backend Development Test</li>
              <li>Fullstack Development Test</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <ul>
              <li><button className="hire-btn">Hire via BYC</button></li>
              <li>Become an Evaluator/Interviewer</li>
              <li>Business Development Course</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>OTHER LINKS</h4>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Refund Policy</li>
              <li>Test and Placement Terms</li>
              <li>User Guidelines</li>
              <li>Grievance Redressal</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div><p>© 2024 Build Your Carrer (BYC) Pvt. Ltd.</p></div>
    <div className='Wtsap_icon' onClick={openWhatsApp}><FaSquareWhatsapp  className='icon'/></div>
    <div className='Arrow_icon' onClick={handleClick}>
      {isUp ? <FaArrowUp className='icon' /> : <FaArrowDown className='icon' />}
    </div>
    </div>
  )
}

export default Footer
