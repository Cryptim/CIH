import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css"; // Import a CSS file for styling
import logoSvg from "../assets/logoSvg.svg"; // Import the SVG logo
import dropdownArrow from "../assets/dropdown-arrow.png"; // Import the dropdown arrow image

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        {/* Wrap the logo in a Link component to navigate to the homepage */}
        <Link to="/">
          <img src={logoSvg} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="dropdown">
            <a
              href="#resources"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Resources & Events
              <img
                src={dropdownArrow}
                alt="Dropdown"
                className="dropdown-arrow"
              />
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#webinars">Webinars</a>
                </li>
                <li>
                  <a href="#workshop">Workshops</a>
                </li>
                <li>
                  <a href="#articles">Articles</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/workshop-page">Services</a>
          </li>
          <li>
            <a href="#volunteer">Volunteer</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <button className="donate-button">Donate</button>
    </div>
  );
};

export default Header;
