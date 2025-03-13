import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './NodeJS.css';

// Importing the Slick Carousel CSS


// Importing images


function NodeJs() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='NodeJs_Img'>
                <h1>NodeJs</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Node_Section'>
       <div className='Node_Section1'>

       <div className='Course_1'>

        <h1>Course Description: -</h1> <br/>
        <p>
<span>Node Js</span>  is a JavaScript runtime environment that allows you to run JavaScript code
outside of a web browser. It's built on Chrome's V8 JavaScript engine and uses an eventdriven, non-blocking I/O model, making it highly efficient for handling concurrent requests. </p>
</div>
<div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        Node.js is a popular open-source, cross-platform JavaScript runtime environment that
allows developers to build server-side applications. It uses a non-blocking, event-driven
I/O model, making it highly efficient for handling concurrent requests. This makes it ideal
for building real-time applications, such as chat applications, online games, and streaming
services. Node.js also has a vast ecosystem of modules and libraries, making it easy to
develop applications quickly and efficiently.
 </p>
 
 </div>

</div>
 

    
   
   


    


    




   




 <div className="marketing-list">
 




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

export default NodeJs;
