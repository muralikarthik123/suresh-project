import React, { useState } from 'react'
import './OurCourses.css';

import { CiClock2 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";






function OurCourses() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCourses = () => {
    if (selectedCategory === 'Full Stack Courses') {
      return (
        <>
          <div className='Our_Courses'>
            <img src='JavaFullstack1.jpg' alt="" />
            <h1>Full Stack Java</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>

          <div className='Our_Courses'>
            <img src='Web1.jpg' alt="" />
            <h1>Web Development</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>
        </>
      );
    } 
    
    else if(selectedCategory === 'Job Assistance Placement Program'){
      return(
      <>

<div className='Our_Courses'>
            <img src='JavaAsistance.jpg' alt="" />
            <h3>Full Stack Java Placement Assistance Program</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>


          <div className='Our_Courses'>
            <img src='Digital2.jpg' alt="" />
            <h3>Digital Marketing Placement Assistance Program</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>      

      </>
      )
    }


    else if(selectedCategory === 'Internships'){
      return(
        <>
        <div className='Our_Courses'>
            <img src='Dj2.jpg' alt="" />
            <h3>Digital Marketing Internship</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>   

          <div className='Our_Courses'>
            <img src='Ui-Ux2.jpg' alt="" />
            <h3>UI/UX Internship</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div> 

        </>
      )
    }
    



    else if(selectedCategory === 'Certification Programs'){
      return(
        <>
        <div className='Our_Courses'>
            <img src='Corejava.jpg' alt="" />
            <h3>Advanced & Core Java Certification Program</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div> 





          <div className='Our_Courses'>
            <img src='Dj1.jpg' alt="" />
            <h3>Digital Marketing Certification Program</h3>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>

        </>
      )
    }
    
    
    
    
    else {
      return (
        <>

<div className='Our_Courses'>
            <img src='prmanagement.jpg' alt="" />
            <h1>Product Management </h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src='Bd2.jpg' alt="" />
            <h1>Bussiness Development </h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src='DM1.jpg' alt="" />
            <h1>Digital Marketing</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src='React1.jpg' alt="" />
            <h1>React Js & React Native</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>









          <div className='Our_Courses'>
            <img src='Node1.jpg' alt="" />
            <h1>Node Js / Express Js</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>






          <div className='Our_Courses'>
            <img src='JavaAdvanced.jpg' alt="" />
            <h1>Java Advanced</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>



          <div className='Our_Courses'>
            <img src='Corejava1.jpg' alt="" />
            <h1>Core Java</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>



          
          <div className='Our_Courses'>
            <img src='SpringBoot.jpg' alt="" />
            <h1>Spring Boot</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src='Php1.jpg' alt="" />
            <h1>Php & Laravel</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




          <div className='Our_Courses'>
            <img src='Ux-ux3.jpg' alt="" />
            <h1>UI/UX Design</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>





          <div className='Our_Courses'>
            <img src='Ai1.jpg' alt="" />
            <h1>AI Tools</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>







          <div className='Our_Courses'>
            <img src='Automation2.jpg' alt="" />
            <h1>Automation & Selenium</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>








   

          <div className='Our_Courses'>
            <img src='JavaFullstack1.jpg' alt="" />
            <h1>Full Stack Java</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>

          <div className='Our_Courses'>
            <img src='Web1.jpg' alt="" />
            <h1>Web Development</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>

          <div className='Our_Courses'>
            <img src='Hsj.jpg' alt="" />
            <h1>HTML, CSS & JavaScript</h1>
            <h2> <span>★★★★</span> 4</h2>
            <div className='card-main-2'>
              <CiClock2/>
              <p>Dur: 2 Months</p>
            </div>
            <div className='card-main-3'>
              <CiClock2/>
              <p>Starts Date: 10 Oct, 2024</p>
            </div>
            <div className='button-main'>
              <button className='enroll'>Enroll Now</button>
              <button className='share'>
                <span><CiShare2 className='shr'/></span>
                SHARE
              </button>
            </div>
          </div>




         



         


        </>
      );
    }
  };

  return (
    <div className='OurCourse-bg'>
      <header>
        <h1>Our <span>Courses</span></h1>
        <p>Explore new and trending free online courses.</p>
      </header> 

      <main>
        <ul>
          <li onClick={() => handleCategoryClick('All Courses')}>All Courses</li>
          <li onClick={() => handleCategoryClick('Full Stack Courses')}>Full Stack Courses</li>
          <li onClick={() => handleCategoryClick('Job Assistance Placement Program')}>Job Assistance Placement Program</li>
          <li onClick={() => handleCategoryClick('Internships')}>Internships</li>
          <li onClick={() => handleCategoryClick('Certification Programs')}>Certification Programs</li>
        </ul>
      </main>

      <section>
        {renderCourses()}
      </section>
    </div>
  )
}

export default OurCourses;
