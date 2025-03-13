import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './Automation_SEliunm.css';

// Importing the Slick Carousel CSS


// Importing images


function Automation() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='Automation_Img'>
                <h1>AutoMation & Selenium</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='AutoMation_Section'>
       <div className='AutoMation_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span>AutoMation & Selenium</span>   Selenium can test web applications against various browsers like Firefox, Chrome, Opera, and Safari, and these tests can be coded in several programming languages like Java, Python, Perl, PHP, and Ruby
 </p>
 </div>

 <div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        Automation refers to the use of technology to perform tasks with minimal human intervention. In software testing, automation is employed to execute repetitive tasks, such as testing applications, to increase efficiency, accuracy, and speed. It allows teams to run tests frequently and reduces the chances of human error, making it easier to ensure software quality.

 </p>
 
</div>

 

<div className='Course_2'>
   
 <h1 className='Digital-Heading'>Selenium:</h1>

<p>Selenium is a widely-used open-source framework for automating web applications. It provides tools and APIs to write tests in various programming languages like Java, C#, Python, and Ruby. Key features of Selenium include:</p>
</div>

</div>




 

    


 

   

    <TimeLine/>











   

    <div className='Benefit_Section'>

    <div className='Benefits_1'>
    <h5>Benefits</h5>
        <h4><FaHandPointRight className='icon'/>Career Guidance and Placement Assistance</h4>
        <h4><FaHandPointRight className='icon'/>Job Search Support</h4>
        <h4><FaHandPointRight className='icon'/>Resume Building Workshops</h4>
        <h4><FaHandPointRight className='icon'/>Career Guidance and Placement Assistance</h4>
        <h4><FaHandPointRight className='icon'/>Job Search Support</h4>
        <h4><FaHandPointRight className='icon'/>Resume Building Workshops</h4>
       
    </div>
</div>




       </div>



 {/* Our Values Section Starting*/}   




{/*Revels Section */}






{/* Home page Starting*/}











            <Fotter/>
        </div>
    );
}

export default Automation;
