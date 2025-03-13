import React from 'react';
import Swal from 'sweetalert2'; 
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import Cards from '../Cards_Section/Cards.jsx';
import Aboutus from '../About/about-main.jsx';
import OurValues from '../OurValues/OurValues.jsx';
import OurTraning from '../OurTraining/OurTraining.jsx';
import OurContact from '../Contact/Education_Contact.jsx';
import TrustedCompany from '../Trusted_Compnys/Trusted_Company.jsx';
import OurCourses from '../Our Courses/OurCourese.jsx';
import Slider from 'react-slick';

import './Home.css';

// Importing the Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const handleClick = () => {
        Swal.fire({
          title: 'Corporate Software Training',
          html: `
            <div style="text-align: left; padding: 20px; font-family: Arial, sans-serif; color: blue;">
              <h2 style="color: #dc143c; font-size: 24px; margin-bottom: 15px; border-bottom: 2px solid #dc143c; padding-bottom: 10px;">
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
          background: `rgba(0, 123, 255, 0.4) url("/carrer.jpg") no-repeat center center / cover`,
          backdrop: 'rgba(0, 123, 255, 0.4)',
        });
      };
    




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='Carsols Section'>
                <Slider {...settings}>
                    <div className='car_img'>
                        <img src='it.jpg' alt="Education Slide 1" />
                    </div>
                    <div  className='car_img'>
                        <img src='it1.jpg' alt="Education Slide 2" />
                    </div>
                    <div  className='car_img'>
                        <img src='Fullstack.jpg' alt="Education Slide 3" />
                    </div>
                    <div  className='car_img'>
                        <img src='cerficate.jpg' alt="Education Slide 1" />
                    </div>
                </Slider>
            </div>



            {/* Cards Section Starting */}
            <Cards />
            <Aboutus />
            <OurCourses/>
            <OurTraning />
            <TrustedCompany />

            {/* Our Values Section Starting */}
            <OurValues />



            {/* Home page Starting */}
            <div className='Our_Contact'>
                <div className='Our_Contact1'>
                    <h1>Corporate Software Training</h1>
                    <p>Elevate Your Team with Byc's Corporate Training Programs. Byc offers tailored corporate training programs to enhance the skills and efficiency of your workforce. Our specialized courses are designed to meet the demands of the ever-evolving corporate landscape, ensuring your team stays ahead in the competitive market.</p>
                    <button onClick={handleClick}>
                        Learn More
                    </button>
                </div>

                <div className='Our_Contact2'>
                    <img src='our_contact.jpg' alt="Education Slide 1" />
                </div>
            </div>

            <div className='Build_Carrer'>
                <h1>HOW DO WE WORK?</h1>
                <p>"Be the change that you wish to see in the world."</p>
                <div className='Carrer'>
                    <div className='Carrer_1'>
                        <h1>Credibility</h1>
                        <h5>How credible is BYC?</h5>
                        <p>Byc has been operating for more than 1 years with 600+ graduates overall, comprising 15% of Byc's employee count.</p>
                    </div>
                    <div className='Carrer_1'>
                        <h1>Credibility</h1>
                        <h5>How credible is BYC?</h5>
                        <p>Byc has been operating for more than 1 years with 600+ graduates overall, comprising 15% of Byc's employee count.</p>
                    </div>
                    <div className='Carrer_1'>
                        <h1>Credibility</h1>
                        <h5>How credible is BYC?</h5>
                        <p>Byc has been operating for more than 1 years with 600+ graduates overall, comprising 15% of Byc's employee count.</p>
                    </div>
                </div>
            </div>

            <OurContact />
            <Fotter />
        </div>
    );
}

export default Home;
