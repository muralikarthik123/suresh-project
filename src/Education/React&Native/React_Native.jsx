import React from 'react';
import Header from '../Header/Header.jsx';
import Fotter from '../Footer/Fotter1.jsx';
import TimeLine from '../TimeLine_Section/Time_Line.jsx';
import { FaHandPointRight } from "react-icons/fa";



import './React_Native.css';

// Importing the Slick Carousel CSS


// Importing images


function ReactNative() {
   
    return (
        <div className='Contact'>
            <Header />
            {/* Carousels starting */}
            <div className='ReactNative_Img'>
                <h1>RecatJs & ReactNative</h1>
            </div>
          
           


         {/* Digital Section Starting*/}   

       <div className='React_Section'>
       <div className='React_Section1'>

       <div className='Course_1'>

        <h1>Course Description: -</h1> <br/>
        
        <p>
<span> React JS</span>   is a JavaScript library used to build user interfaces for web applications. It uses
a component-based architecture for efficient development.</p>

<p>
<span> React Native</span>   React Native is a framework that allows developers to build native mobile apps using
JavaScript and React. It shares the same core principles as React JS but targets mobile
platforms instead of the web..</p>

</div>

<div className='Course_2'>

<h1>Brief Explanation: -</h1> <br/>

<h2>Reactjs</h2>
        <p>
         is a JavaScript library used to build user interfaces for web applications. It
employs a declarative paradigm, meaning you describe the desired state of your UI, and
React handles the updates efficiently. Key concepts include components, JSX (a syntax
extension for JavaScript), and the virtual DOM. React's component-based architecture
promotes reusability and maintainability.

 </p>
 <h1 className='Digital-Heading'>React Native:</h1>



 
<p>React Native is a framework for building native mobile applications using JavaScript. It
shares the same core principles as React JS, including components and JSX. However,
instead of rendering to the browser's DOM, React Native renders to the native platform's
view hierarchy. This allows you to create cross-platform applications with a native-like look
and feel while leveraging JavaScript's flexibility and ecosystem.
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

export default ReactNative;
