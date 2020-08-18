import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="intro-section">
        <div className="message">
          <div className="page-title"> OPEN POSITIONS </div>
          <div className="message-title">
            <div> Help us create the</div>
            <div> future of software</div>
          </div>
          <span className="message-paragraph">
            The ability to create software opens up tremendous creative
            possibilities, and we want to empower people to bring these
            possibilities to life no matter how ambitious. The good news is that
            creating software doesn't have to mean writing code. What will you
            create?
          </span>
        </div>
        <div className="message-icon"> </div>
      </div>
    </div>
  );
};

export default Header;
