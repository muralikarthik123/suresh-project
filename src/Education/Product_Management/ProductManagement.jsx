import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './ProductMnagement.css';

// Importing the Slick Carousel CSS


// Importing images


function productmanagement() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='ProductManagement_img'>
                <h1>Product Management</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Product_Section'>
       <div className='Product_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span> Product Management</span> is the discipline of overseeing the development and launch of a
product. It involves planning, designing, building, and marketing a product to meet
customer needs and business goals  </p>
</div>
<div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        Product Management is the discipline of planning, developing, launching, and managing a
product. It involves the entire lifecycle of a product, from ideation to end-of-life.
 </p>
 
 </div>

 </div>

 
 <div className="marketing-list">
 <ul class="marketing-list1">
    <li class="seo-item">
        <strong class="seo-title">  <FaHandPointRight className='icon'/>Market research:</strong>
        Understanding customer needs and market trends
    </li>
    <li class="seo-item">
        <strong class="seo-title"> <FaHandPointRight className='icon'/>Product strategy:</strong>
         Defining the product's vision, goals, and roadmap
    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Feature prioritization:</strong>
        Determining which features to include in the product.
    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Cross-functional collaboration:   </strong>
       
        Working with teams like engineering, design, and
marketing to<br/> bring the product to market.

    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>• Product launch:</strong>
        Overseeing the product launch and go-to-market strategy.

    </li>
    <li class="seo-item">
        <strong class="seo-title"><FaHandPointRight className='icon'/>Post-launch management:</strong>
        Analyzing product performance, gathering feedback,
        and making improvements.
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

export default productmanagement;
