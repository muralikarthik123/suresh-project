// PlacementPopupButton.js
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Initialize SweetAlert with React content support
const MySwal = withReactContent(Swal);

const showPlacementPopup = () => {
  MySwal.fire({
    title: '',
    html: `
      <div style="text-align: center;">
        <h2 style="color: #D32F2F; font-weight: bold; font-size: 28px; margin-bottom: 10px;">
          PLACEMENT ASSISTANCE PROGRAM ON JAVA & .NET
        </h2>
        <img src="path_to_image.png" alt="Placement Assistance" style="width: 100%; max-width: 600px; border-radius: 8px; margin-bottom: 20px;" />
        <div style="background: #fefefe; border-radius: 8px; padding: 15px;">
          <h3 style="color: #E65100; text-align: left;">Highlights</h3>
          <ul style="text-align: left; font-size: 16px; line-height: 1.6; list-style: none; padding: 0;">
            <li>• Practice Platform with Personal Credentials</li>
            <li>• Live Platform Evaluates Your Logic with Test Cases</li>
            <li>• Weekly Performance Reports to Improve Skill</li>
            <li>• Topic Wise MCQ’s</li>
            <li>• Topic Wise POC’s</li>
            <li>• Dedicated Mentor Support</li>
            <li>• Regular HR & Tech Mock Interviews</li>
          </ul>
          <p style="margin-top: 10px; font-weight: bold; font-size: 18px; text-align: center;">
            Date & Time: 26<sup>th</sup> Sep, 9:00 AM
          </p>
          <p style="font-size: 14px; color: #333; text-align: center;">
            Will Support until you Placed. Student must be regular, hardworking & committed.
          </p>
        </div>
      </div>
    `,
    showConfirmButton: true,
    confirmButtonText: 'Close',
    width: '90%',
    padding: '1em',
    background: '#fff',
    customClass: {
      popup: 'placement-popup',
    },
  });
};

const PlacementPopupButton = () => {
  return (
    <div>
      <button
        onClick={showPlacementPopup}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#D32F2F',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        Show Placement Popup
      </button>
    </div>
  );
};

export default PlacementPopupButton;
