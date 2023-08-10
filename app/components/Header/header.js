"use client";
import './header.css';

import { useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   solid,
//   regular,
//   brands,
//   icon
// } from '@fortawesome/fontawesome-svg-core/import.macro'
/////////////
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
//////////
//import { IonIcon } from 'ionicons/react';

import Link from "next/link"
//import './header.css';
import { useState } from "react";
//import MobileNav from "../MobileNav/MobileNav";
import { handleScroll } from "../JsContent/scrollHandler";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbarRef = useRef(null);

  // Handle clicks outside of the navbar
  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside of the navbar
    document.addEventListener('click', handleOutsideClick);

    return () => {
      // Clean up the event listener on unmount
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // const handleMobileNavClick = () => {
  //   setIsMobileNavOpen(!isMobileNavOpen);
  // }; 

  // const DriveLink = () => (
  //     <Link href="https://facebook.com">
  //     </Link>
  //  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    // <header className="header" data-header>
    <header className={`header ${isNavbarOpen ? 'active' : ''}`} data-header>
    
    <div className="container">
      <h1>
        <a href="#" className="logo">CityHub</a>
      </h1>
      <nav
      //  ref={navbarRef}
       className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>
     
      {/* <nav className="navbar" data-navbar>
       */}
        <div className="navbar-top">
          <a href="#" className="logo">CityHub</a>
          <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
          {/* <FontAwesomeIcon icon={brands('twitter')} />
          */}
          <FontAwesomeIcon icon={faXmark} />
            {/* <ion-icon name="close-outline"></ion-icon>
          */}
          </button>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home" className="navbar-link" data-nav-toggler>
              Home</a>
          </li>
          <li className="navbar-item">
           <a href="#services" className="navbar-link" data-nav-toggler>
            Services</a>
            </li>
             <li className="navbar-item">
            <a href="#about" className="navbar-link" data-nav-toggler>
              About</a>
            </li>
          <li className="navbar-item" >
            <a href="#contact" className="navbar-link" data-nav-toggler>
              Contact</a>
          </li>
          <li className="navbar-item" >
          <a href="https://cityhub.onrender.com/" target="_blank" id="lgbtn" className="navbar-link" data-nav-toggler>
        {/* <span className="span">Login / Register</span>
         */}
          Login / Register
        </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        {/* <button className="header-action-btn" aria-label="Open search" data-search-toggler>
     
        </button> */}
        {/* <a href="#" className="header-action-btn login-btn">
          <span className="span">Login / Register</span>
        </a> */}
        {/* ////////////////// */}
        <a href="https://cityhub.onrender.com/" target="_blank" className={`header-action-btn login-btn ${isNavbarOpen ? 'show-mobile' : ''}`}>
        <span className="span">Login / Register</span>
        </a>

        {/* <button className="header-action-btn nav-open-btn" aria-label="Open menu" data-nav-toggler>
       <FontAwesomeIcon icon={faBars} />
        </button> */}
        <button
           ref={navbarRef}
          className="header-action-btn nav-open-btn"
          aria-label="Open menu"
          onClick={handleNavbarToggle}
          data-nav-toggler
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {/* <div className="overlay" data-nav-toggler data-overlay></div>
       */}
      <div
        className={`overlay ${isNavbarOpen ? 'active' : ''}`}
        data-nav-toggler
        data-overlay
      ></div>
    </div>
  </header>
    );
}

export default Header;