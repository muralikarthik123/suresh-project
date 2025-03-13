
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './Footer1.css'; // Ensure this path matches where your CSS file is saved
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Icons from react-icons
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {






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
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
        <div className='Logo_img'> <img src='Byc1.png'  alt=''    />
       
       <p>Build Your Carrer</p>
</div>
        </div>
        <div className="footer-social">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon1" />
          <FaInstagram className="social-icon2" />
          <FaLinkedin className="social-icon3" />
          <FaYoutube className="social-icon4" />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Our Courses</li>
            <li>Placements</li>
            <li>Contact Us</li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>AI TOOLS</li>
            <li>Web design</li>
            <li>Logo design</li>
            <li>Seo & Optimization</li>
            <li>App Development</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>Profile</li>
            <li>My account</li>
            <li>Preferences</li>
            <li>Purchase</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li>Java Full Stack</li>
            <li>Digital Marketing</li>
            <li>Ui/Ux</li>
            <li>ReactJs &React Native</li>
            <li>Node Js</li>
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h3>Subscribe</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Byc' It Services. All rights reserved</p>
       
        <div className='Wtsap_icon' onClick={openWhatsApp}><FaSquareWhatsapp  className='icon'/></div>
    <div className='Arrow_icon' onClick={handleClick}>
      {isUp ? <FaArrowUp className='icon' /> : <FaArrowDown className='icon' />}
    </div>
      </div>
    </footer>
  );
};

export default Footer;
