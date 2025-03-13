import React from 'react';
import './Cards.css'; 
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const JavaCard = () => {
  return (
    <div className='main_card'>
    <div className="card">
      <div className="card-header">
        <img src="java.jpg" alt="Java Placement Program" className="card-image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Full Stack Java Placement Assistance Program</h2>
        <div className="card-rating">
          <span>★★★★★</span>
          <span className="rating-count">0</span>
        </div>
        <div className="card-details">
          <p><i className="fa fa-calendar"></i> Start Date: 26 Sept 2024</p>
          <p><i className="fa fa-user"></i> by: Real-Time Expert</p>
          <p><i className="fa fa-clock"></i> Dur: 6 Months</p>
        </div>
        <div className="card-actions">
          <button className="enroll-btn">ENROLL</button>
          <button className="share-btn">SHARE</button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="Python1.jpg" alt="Java Placement Program" className="card-image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Python Placement Assistance Program</h2>
        <div className="card-rating">
          <span>★★★★★</span>
          <span className="rating-count">0</span>
        </div>
        <div className="card-details">
          <p><i className="fa fa-calendar"></i> Start Date: 26 Sept 2024</p>
          <p><i className="fa fa-user"></i> by: Real-Time Expert</p>
          <p><i className="fa fa-clock"></i> Dur: 6 Months</p>
        </div>
        <div className="card-actions">
          <button className="enroll-btn">ENROLL</button>
          <button className="share-btn">SHARE</button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="Designer-Ui.jpg" alt="Java Placement Program" className="card-image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Ui/Ux  Placement Assistance Program</h2>
        <div className="card-rating">
          <span>★★★★★</span>
          <span className="rating-count">0</span>
        </div>
        <div className="card-details">
          <p><i className="fa fa-calendar"></i> Start Date: 26 Sept 2024</p>
          <p><i className="fa fa-user"></i> by: Real-Time Expert</p>
          <p><i className="fa fa-clock"></i> Dur: 6 Months</p>
        </div>
        <div className="card-actions">
          <button className="enroll-btn">ENROLL</button>
          <button className="share-btn">SHARE</button>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <img src="Digital.jpg" alt="Java Placement Program" className="card-image" />
      </div>
      <div className="card-body">
        <h2 className="card-title">Digital Marketing Placement Assistance Program</h2>
        <div className="card-rating">
          <span>★★★★★</span>
          <span className="rating-count">0</span>
        </div>
        <div className="card-details">
          <p><i className="fa fa-calendar"></i> Start Date: 26 Sept 2024</p>
          <p><i className="fa fa-user"></i> by: Real-Time Expert</p>
          <p><i className="fa fa-clock"></i> Dur: 6 Months</p>
        </div>
        <div className="card-actions">
          <button className="enroll-btn">ENROLL</button>
          <button className="share-btn">SHARE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JavaCard;