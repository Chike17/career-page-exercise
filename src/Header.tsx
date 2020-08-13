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
          <div className="message-paragraph">
            <div>The ability to create software opens up tremendous</div>
            <div> creative possibilities, and we want to empower people</div>
            <div>to bring these possibilities to life no matter how</div>
            <div>ambitious. The good news is that creating software</div>
            <div>doesn't have to mean writing code. What will</div>
            <div>you create?</div>
          </div>
        </div>
        <img className="message-icon" src="/assets/open-positions.gif" />
      </div>
    </div>
  );
};

export default Header;
