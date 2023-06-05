import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Group from "../assets/group.png"
import Grp from "../assets/grp.png"
import Grpp from "../assets/grpp.png"
import Tag from "../assets/tag.png"
import Girl from "../assets/girl.svg"

const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const handleEmailClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`hero ${showPopup ? 'popup-open' : ''}`}>
      <div className="hero-child" />
      <img
        className="hero-item"
        alt=""
        src={Girl}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showText && (
        <div className="image-hover-text">
          <div className="ellipse-div" />
          <div className="home2-child5" />
          <b className="bring-real-life-container">
            <span>Bring Real Life Ideas Into </span>
            <span className="design">DESIGN</span>
            <span> Is My Passion</span>
          </b>
          <b className="years1">24 Years</b>
          <b className="harvard">Harvard</b>
          <b className="los-angeles1">Los Angeles</b>
          <b className="photography">Photography</b>
          <b className="b1">4.0</b>
          <div className="age">Age</div>
          <div className="university">University</div>
          <div className="living-place1">Living Place</div>
          <div className="hobby">Hobby</div>
          <div className="gpa">GPA</div>
        </div>
      )}
      <div className="gafarillo4">
        <span>{`Gafarillo `}</span>
        <span className="span2">.</span>
      </div>
      <b className="hi-i-am-container2">
        <span>{`Hi! `}</span>
        <span className="i-am2"> I AM</span>
      </b>
      <b className="gafarillo5">Gafarillo</b>
      <div className="home4">
        <Link to="/home" className="email">
          Home
        </Link>
      </div>
      <div className="uiux-designer-with-container2">
        <p className="uiux-designer-with2">
          UI/UX Designer with over 3 years of experience
        </p>
        <p className="uiux-designer-with2">with great product designing skills.</p>
      </div>
      <div className="instagram2">Instagram</div>
      <div className="youtube2">YouTube</div>
      <div className="services2">Services</div>
      <div className="download-cv2">Download CV</div>
      <div className="hero-inner" />
      <div className="hero-child1" />
      <div className="uiux2">UI/UX</div>
      <div className="hero-child2" />
      <div className="hire-me2">Hire Me</div>
      <div className="email-me3" onClick={handleEmailClick}>
        Email Me
      </div>
      <b className="years3">3 Years</b>
      <b className="b3">40+</b>
      <b className="los-angeles3">Los Angeles</b>
      <div className="experience2">Experience</div>
      <div className="projects2">Projects</div>
      <div className="living-place3">Living Place</div>
      <div className="hero-child3" />
      <div className="projects-case-studies2">Projects Case Studies</div>
      <div className="sneakers-store-container">
        <div className="sneakers-store2">Sneakers Store</div>
        <div className="group-child7" />
        {/* <img className="group-icon8" alt="" src={Group} /> */}
      </div>
      <div className="flames-fitness-container">
        <div className="flames-fitness2">Flames Fitness</div>
        <div className="group-child8" />
        {/* <img className="group-icon9" alt="" src={Grp} /> */}
      </div>
      <div className="thenx-store-container">
        <div className="thenx-store2">Thenx Store</div>
        <div className="group-child9" />
        {/* <img className="group-icon10" alt="" src={Grpp} /> */}
      </div>
      <div className="hero-child4" />
      <div className="view-behance2">View Behance</div>

      {showPopup && (
              <div className="rectangle-parent">
              <div className="group-child3" />
              <div className="group-child4" />
              <div className="email-me2">Email Me</div>
              <div className="im-glad-that-container">
                <p className="im-glad-that">{`I’m glad that you have shown your interest in my UI UX Designing portfolio website. `}</p>
                <p className="im-glad-that">Please feel free to contact me</p>
              </div>
              <div className="group-child5" />
              <Link className="contact-me email" onClick={handleClosePopup}>Contact me</Link>
              <div className="cancel">
                <Link className="email" onClick={handleClosePopup}>Cancel</Link>
              </div>
              <img className="group-child6"  src={Group} />
              <img className="group-icon6" alt="" src={Grp} />
              <img className="group-icon7" alt="" src={Grpp} />
              <Link onClick={handleClosePopup}>
                <img
                  className="iconsaxlineartagcross"
                 
                  src={Tag}
                />
              </Link>
            </div>
      )}
    </div>
  );
};

export default Hero;
