import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './Business_Development.css';

// Importing the Slick Carousel CSS


// Importing images


function BusinessDevelopment() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='BusinessDevelopment_Img'>
                <h1>Business & Development</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Business_Section'>
       <div className='Business_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span>Business & Development</span> Business Development is the process of identifying, creating, and nurturing business
opportunities to achieve sustainable growth.

 </p>
 </div>
 <div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        Business Development is the process of identifying, developing, and maintaining
relationships with customers and partners to drive business growth. It involves various
activities such as market research, customer acquisition, sales, partnerships, and
strategic planning. Business development professionals play a crucial role in expanding a
company's market share, increasing revenue, and building long-term sustainability
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

export default BusinessDevelopment;
