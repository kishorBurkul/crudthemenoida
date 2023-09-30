import React from 'react';
import { Form } from 'react-bootstrap';

const Header = ({ darkTheme, onToggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${darkTheme ? 'dark' : 'light'}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          Your App Name
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Form.Check
          type="switch"
          id="theme-switch"
          label="Dark Theme"
          checked={darkTheme}
          onChange={onToggleTheme}
          className="ml-2"
        />
      </div>
    </nav>
  );
};

export default Header;
