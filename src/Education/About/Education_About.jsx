import React, { useState, useEffect } from 'react';
import './Education_About.css'; // Include your custom styles here

function Education_About() {
  const [progressValues, setProgressValues] = useState({
    designDevelopment: 0,
    staticDynamic: 0,
    ecommerceDevelopment: 0,
  });

  // Simulate progress loading with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        designDevelopment: 85,
        staticDynamic: 90,
        ecommerceDevelopment: 95,
      });
    }, 500); // Simulate delay in loading progress values

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="about-section">
      <div className="text-section">
        <h3 className="about-heading">
          ABOUT US
          <span className="underline"></span>
        </h3>
        <h1 className="main-heading">
          We offer Byc IT solutions, backed by our extensive <br /> 10-year track record.
        </h1>
        <p className="description">
          Increasing brand visibility through networking events can be a valuable strategy to 
          attract new customers and grow your business. Networking events provide opportunities 
          to connect with potential customers, partners, and industry peers.
        </p>

        <div className="progress-bar">
          <div className="progress-label">
            <span>Design & Development</span>
            <span>{progressValues.designDevelopment}%</span>
          </div>
          <div className="progress-track">
            <div className="progress" style={{ width: `${progressValues.designDevelopment}%` }}></div>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-label">
            <span>Static & Dynamic Website Development</span>
            <span>{progressValues.staticDynamic}%</span>
          </div>
          <div className="progress-track yellow">
            <div className="progress1" style={{ width: `${progressValues.staticDynamic}%` }}></div>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-label">
            <span>E-commerce Website Development</span>
            <span>{progressValues.ecommerceDevelopment}%</span>
          </div>
          <div className="progress-track black">
            <div className="progress2" style={{ width: `${progressValues.ecommerceDevelopment}%` }}></div>
          </div>
        </div>

        <button className="read-more-btn">Read More</button>
      </div>

      <div className="image-section">
        <img src='about.png' alt="Globe and People" className="background-image" />
      </div>
    </div>
  );
}

export default Education_About;
