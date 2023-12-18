// AboutPage.js

import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './AboutPage.css'; // Import your CSS file for styling

const AboutPage = () => {
    
  return (
    <div className="about-page">
      <div className="section">
        <img src="/path/to/image1.jpg" alt="Image 1" />
        <div className="text">
          <h2>Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div className="section">
        <div className="text">
          <h2>Title 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img src="/path/to/image2.jpg" alt="Image 2" />
      </div>

      <div className="section">
        <img src="/path/to/image3.jpg" alt="Image 3" />
        <div className="text">
          <h2>Title 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
