import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './Java.css';

// Importing the Slick Carousel CSS


// Importing images


function JavaFullStack() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='JavaFullStack_img'>
                <h1>Java FullStack Development</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Java_Section'>
       <div className='Java_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span> Java Advanced</span>   is a more complex and Security Programming Languages level of Java programming that involves deeper
understanding of concepts  like Opps  multithreading, networking, reflection API, and advanced
collections. Stream API It's used for building high-performance, enterprise-level applications. </p>
<h2>Brief Explanation: -</h2> <br/>
</div>
<div className='Course_2'>
        <p>
        Java Advanced is a term often used to describe the more complex and specialized
aspects of the Java programming language. It typically involves topics beyond the
foundational concepts of Java.   <a href="./Java_Syllabus.pdf" downcdload="JavaSyllbus.pdf">
        View More
      </a>



 </p>
 </div>
</div>

 <h1 className='Java-Heading'>Java FullStack Development:</h1>



 
 <div className="marketing-list">
 <ul class="marketing-list1">
    <li class="seo-item">
        <strong class="seo-title">  <FaHandPointRight className='icon'/>Collections Framework:</strong>
        A set of classes and interfaces that provide efficient ways
        to store and manipulate collections of objects.
    </li>
    <li class="seo-item">
        <strong class="seo-title"> <FaHandPointRight className='icon'/>Generics:</strong>
        A feature that allows you to create reusable components that can work
with different data types without <br/>compromising type safety.

    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Concurrency:</strong>
        Techniques for writing programs that can execute multiple tasks
        simultaneously, often using threads and<br/> synchronization mechanisms.
    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Reflection API:   </strong>
       
        A mechanism that allows you to inspect and modify the behavior of
classes and objects at runtime.

    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Networking:</strong>
         Building network applications that communicate with other systems
        over a network.
    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Database Connectivity:</strong>
        Interacting with databases using JDBC (Java Database
            Connectivity).
    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Web Development:</strong>
        Creating web applications using frameworks like Spring,
        Servlet, and JSP.
    </li>
</ul>

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

export default JavaFullStack;
