import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './Ui-ux.css';

// Importing the Slick Carousel CSS


// Importing images


function UIUX() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='Ui_Img'>
                <h1>UI & UX DESIGN</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='Ui-Ux_Section'>
       <div className='Digital_Section1'>
       <div className='Course_1'>
        <h1>Course Description: -</h1> <br/>
        <p>
<span>UI/UX</span>   design focuses on creating user-friendly and visually appealing interfaces for
digital products. It involves understanding user needs, conducting research, and designing
intuitive layouts and interactions that enhance the overall user experience.
 </p>
 </div>
 <div className='Course_2'>
<h2>Brief Explanation: -</h2> <br/>
        <p>
        UI/UX design is the process of creating interfaces that are both visually appealing and easy
to use. UI (User Interface) focuses on the visual elements of the design, such as colors,
fonts, and layout, while UX (User Experience) focuses on the overall user journey and how
the interface feels to interact with. Effective UI/UX design requires a deep understanding of
the target audience and their needs, as well as a strong foundation in design principles and
best practices

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

export default UIUX;
