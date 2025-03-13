import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './Php.css';

// Importing the Slick Carousel CSS


// Importing images


function PHP() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='PHP_Img'>
                <h1>PHP & Larvel</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Php_Section'>
        <div className='Php_Section1'>
            <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span>PHP/Laravel</span>  is a powerful web development framework that leverages the PHP
programming language. It provides a robust structure and tools for building scalable and
maintainable web applications, making it a popular choice among developers.
 </p>
 </div>
 <div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        PHP (Hypertext Preprocessor) is a popular, server-side scripting language widely used for
building websites and web applications. Known for its simplicity, flexibility, and extensive
community support, PHP powers countless online platforms. Laravel, a PHP framework, is
a powerful tool that streamlines the development process by providing a clean, expressive
syntax and a rich ecosystem of packages and tools. With Laravel, developers can
efficiently build robust, scalable, and maintainable web applications, saving time and
effort.

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

export default PHP;
