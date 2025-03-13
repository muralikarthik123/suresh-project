import React from 'react';
import './Trusted_Company.css'; // Import the CSS for styling

const TrustedCompanies = () => {
  return (
    <div className="trusted-companies">
      <h2>Trusted by over 500+ companies</h2>
      <div className="marquee">
        <div className="companies-track">
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fupgrad.png&w=256&q=75' alt='UpGrad logo' />
          </div>
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fgroup-6158spinny_1.svg&w=384&q=75' alt='UpGrad logo' />
          </div>
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fmoengage.png&w=384&q=75' alt='UpGrad logo' />
          </div>
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Ffill-1smallcase.svg&w=384&q=75' alt='UpGrad logo' />
          </div>
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fflipkart-1flipkart.svg&w=384&q=75' alt='UpGrad logo' />
          </div>
          <div className="company-card">
            <img src='https://relevel.com/cms-next-images/_next/image?url=https%3A%2F%2Fcdn.relevel.com%2Fcms-assets%2F_next%2Fstatic%2Fstoryblok-assets%2Fgroup-6158spinny_1.svg&w=384&q=75' alt='UpGrad logo' />
          </div>
          {/* Add more company cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
