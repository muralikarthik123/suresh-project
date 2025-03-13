import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Education/Home/Home.jsx'; 
import Contact from './Education/Contact/Contact.jsx'; 
import About from './Education/About/About.jsx'; 
import Digital from './Education/Digital/Digital.jsx'; 
import AITools from './Education/AITools/AITools.jsx';
import ProductManagement from './Education/Product_Management/ProductManagement.jsx';
import PHP from './Education/PHP/Php.jsx';
import ReactNative from './Education/React&Native/React_Native.jsx';
import NodeJs from './Education/NodeJS/NodeJS.jsx';
import  BusinessDevelopment from './Education/Business_Development/Business_Development.jsx';
import  JavaFullStack from './Education/Java_FullStack/Java.jsx';
import  UiUx from './Education/UI-UX/Ui-ux.jsx';
import  Automation from './Education/Automation_Seliunium/Automation_Seliunm.jsx';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/AiTools" element={<AITools />} />
        <Route path="/productmanagement" element={<ProductManagement />} />
        <Route path="/php" element={<PHP />} />
        <Route path="/reactnative" element={<ReactNative />} />
        <Route path="/nodejs" element={<NodeJs />} />
        <Route path="/businessdevelopment" element={<BusinessDevelopment />} />
        <Route path="/javafullstack" element={<JavaFullStack />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="/Automation" element={<Automation/>} />
      </Routes>
    </Router>
  );
}

export default App;
