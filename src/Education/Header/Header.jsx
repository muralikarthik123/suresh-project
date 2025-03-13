import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Header.css';
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    Swal.fire({
      title: '<span style="color:orange;">Corporate Software Training</span>',
    
      html: `
        <div style="text-align: left; padding: 20px; font-family: Arial, sans-serif; color:white;">
          <h2 style="color:#e63e62; font-size: 24px; margin-bottom: 15px; border-bottom: 2px solid #dc143c; padding-bottom: 10px;">
            Elevate Your Team with Byc's Corporate Training Programs
          </h2>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Byc offers tailored corporate training programs to enhance the skills and efficiency of your workforce. 
            Our specialized courses are designed to meet the demands of the ever-evolving corporate landscape, 
            ensuring your team stays ahead in the competitive market.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            For more information, you can explore our services or contact us directly.
          </p>
        </div>
      `,
      showCloseButton: true,
      confirmButtonText: 'Close',
      width: '600px',
      padding: '20px',
    background: 'rgba(0, 123, 255, 0.4) url("carrer3.jpg") no-repeat center center / cover',
      backdrop: 'rgba(0, 123, 255, 0.4)',
    });
  };

  return (
    <div className='bg'>
      <header>
        <div className='Logo_img'>
          <img src='BYC1.png' alt='' />
          <p>Build Your Career</p>
        </div>
        <div className='Search_Main'>
          <div className='Search_Button1'>
            <input className='Searchbar' type="text" placeholder="Search.." />
            <div className='sch'>
              <FaSearch className='Search_button' />
            </div>
          </div>
        </div>

        <div className='mobile-menu-toggle' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <ImCross className='crossx' />
          ) : (
            <GiHamburgerMenu className='menu' />
          )}
        </div>

        <nav className={isMobileMenuOpen ? 'mobile-nav-open' : ''}>
          <ul>
            <li className='home' onClick={handleClick}>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About us</Link>
            </li>
            <li>
              <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                Our Courses
                <span>
                  <IoIosArrowDown style={{ fontSize: 15, fontWeight: 'bold' }} />
                </span>
              </span>
              {isDropdownOpen && (
                <ul className='dropdown'>
                  <li className='list'>
                  <Link to="/digital">Digital Marketing</Link></li>
                  <li className='list'>
                  <Link to="/uiux">UI/UX Designer</Link></li>
                  <li className='list'><Link to="/php">  Php Developer</Link></li>
                  <li className='list'><Link to="/reactnative"> ReactJs & ReactNative</Link></li>
                  <li className='list'><Link to="/nodejs">NodeJs</Link></li>
                  <li className='list'><Link to="/AiTools">Artifical Intellignce</Link></li>
                  <li className='list'><Link to="/businessdevelopment"> Business Development</Link></li>
                  <li className='list'><Link to="/productmanagement"> Product Management</Link></li>
                  <li className='list'><Link to="/javafullstack"> Java Full Stack</Link></li>
                  <li className='list'><Link to="/automation"> Automation & Selenium</Link></li>
                </ul>
              )}
            </li>
            <li>
            <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;