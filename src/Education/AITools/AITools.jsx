import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './AiTools.css';

// Importing the Slick Carousel CSS


// Importing images


function AITools() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='AITools_Img'>
                <h1>AI TOOLS</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='AI_Section'>
       <div className='AI_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span>AI Tools</span>  are software applications that use artificial intelligence to perform tasks,
automate processes, and provide insights. They can help with everything from creating art
to analyzing data.
 </p>
 </div>
 <div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        AI tools are sophisticated software applications that leverage artificial intelligence
techniques to automate tasks, analyze data, and make intelligent decisions. These tools
can range from simple chatbots to complex machine learning algorithms capable of
performing tasks that were once exclusive to human intelligence. Common applications
include natural language processing, image recognition, predictive analytics, and
automated customer service. AI tools are increasingly being integrated into various
industries, from healthcare and finance to manufacturing and marketing, to improve
efficiency, reduce costs, and gain a competitive edge.   
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

export default AITools;
