import React, { useState } from 'react';
import './Education_Contact.css';
import Swal from 'sweetalert2';
import Revels from '../Revel_Section/Revel.jsx';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/; // Regex for 10-digit mobile number

    if (!formData.fullName) newErrors.fullName = 'Full Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile Number is required.';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile Number must be 10 digits.';
    }
    if (!formData.company) newErrors.company = 'Company Name is required.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      // Show the SweetAlert popup if validation passes
      Swal.fire({
        title: 'Success!',
        html: '<p>Your message has been sent.</p><p>Welcome!</p>',
        icon: 'success',
        iconColor: '#007bff', // Set the desired color for the icon
        confirmButtonText: 'OK',
        background: '#b3e0ff',
      });
      
      
      // Reset the form after submission
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        company: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className='bg_Main'>
      <div className='main'>
        <div className='l-div'>
          <div className='img-div1'>
            <p className='P'>We Love Byc IT Solutions</p>
            <img className='imgg' src='Edu-contact1.png' alt='' />
            <img className='imgg' src='Edu-contact2.jpg' alt='' />
            <img className='imgg' src='Edu-contact.jpg' alt='' />
            <div className='img-div2'>
              <img className='imgg' src='Educontact3.png' alt='' />
              <img className='imgg2' src='Edu-contact2.jpg' alt='' />
            </div>
          </div>
        </div>

        <div className='R-div'>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='fullname'
              type='text'
              name='fullName'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <p className='error'>{errors.fullName}</p>}

            <input
              className='email'
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className='error'>{errors.email}</p>}

            <input
              className='mobile'
              type='text' // Changed to text for better control
              name='mobile'
              placeholder='Mobile Number'
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className='error'>{errors.mobile}</p>}

            <input
              className='company'
              type='text'
              name='company'
              placeholder='Company Name / College Name'
              value={formData.company}
              onChange={handleChange}
              required
            />
            {errors.company && <p className='error'>{errors.company}</p>}

            <textarea
              className='describe'
              name='message'
              placeholder='Describe message here'
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className='error'>{errors.message}</p>}

            <button type='submit' className='submit'>Submit</button>
          </form>
        </div>
      </div>

      <div className='we'>
        <div className='help'>
          <h3 className='h3'>We Love to Help You</h3>
          <p>Explore new and trending free online courses.</p>
          <p className='p1'>Phone:<span className='p2'>8639023948</span></p>
          <p className='p1'>Email:<span className='p2'>info@byc.com</span></p>
          <p className='p1'>Call/Whatsapp:<span className='p2'> +91 8179191999</span></p>
          <p className='p1'>International:<span className='p2'> +1 404-232-9879, +1 248-522-6925</span></p>
        </div>
        <div className='Head'>
          <p className='p1'>Head Office:<span className='p3'> 2nd Floor, Amulya Building, Guntur, AndhraPradesh, 522002.</span></p>
          <p className='p1'>Kanagala Branch:<span className='p3'> Ground Floor, Manjeera square,opp Prime Hospital, Kanagala, AP.</span></p>
          <p className='p1'>Chennai Branch:<span className='p3'> 2nd Floor, Sreeramoju Complex, K P H B Phase 1, Chennai, 500072.</span></p>
          <p className='p1'>USA :<span className='p3'> 5007 Arbor View Pkwy NW Acworth, GA, 30101</span></p>
        </div>
      </div>

      <div>
        <iframe
          title="Map of Maawaabro IT Solutions location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.353837591242!2d80.4410836741848!3d16.304854933088894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75f03b04a147%3A0xd6ca383a256c940c!2sMaawaabro%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1726824053773!5m2!1sen!2sin"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Revels />
    </div>
  );
}

export default Contact;
