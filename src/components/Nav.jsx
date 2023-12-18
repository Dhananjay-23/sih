// import React, { useState } from 'react';
// import './Nav.css'; // Import your CSS file for styling

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbar-brand">
//         <span>My App</span>
//       </div>

//       <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//         <div className="nav-item" onClick={toggleMenu}>
//             About Us
//         </div>
//         <div className="nav-item" onClick={toggleMenu}>
//           Maps
//         </div>
//         <div className="nav-item" onClick={toggleMenu}>
//           Trends
//         </div>
//         <div className="nav-item" onClick={toggleMenu}>
//           Grievance
//         </div>
//         <div className="nav-item" onClick={toggleMenu}>
//           Prototype
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// Navbar.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'; // Import your CSS file for styling

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    toggleMenu(); // Close the menu after navigating
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <span>My App</span>
      </div>

      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-item" onClick={() => navigateTo('/')}>
          Home
        </div>
        <div className="nav-item" onClick={() => navigateTo('/maps')}>
          Maps
        </div>
        <div className="nav-item" onClick={() => navigateTo('/trends')}>
          Trends
        </div>
        <div className="nav-item" onClick={() => navigateTo('/grievance')}>
          Grievance
        </div>
        <div className="nav-item" onClick={() => navigateTo('/prototype')}>
          Prototype
        </div>
      </div>
    </div>
  );
};

export default Navbar;

