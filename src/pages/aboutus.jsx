import React from "react";
import '../styles/aboutus.css'

const Aboutus = () =>{
  return(
    <div>
    <header>
        <div className="header">
          <h1 className="logo">EDU-Rank</h1>
          <div>
            <button>Home</button>
            <button id="about">About</button>
            <button id="contact">Contact</button>
            <button id="adlogin">Admin Login</button>
          </div>
        </div>
      </header>
      <div className="main-content-header">
        <h1 className="search">About Us</h1>
        <div className="div2">
          <h3>Student Result Management System</h3>
          <p>
            This Software Application unbelievably unravels and quickens the
            result management system with unique templates by providing the
            administration a secure database system for storing, evaluating, and
            publishing the test scores and grades of candidates online. The
            database likewise allows the student to observe and gander at the
            exam results on the web at whatever point necessary.
          </p>
          <p>
            Student Result Management System is a technological opportunity for
            the school, college, university, and coaching center institutions
            searching for a secure, simple, and alternative solution to the
            conventional paper-based exam results evaluation, reporting, and
            distribution.
          </p>
        </div>
      </div>
      </div>
  )
}
export default Aboutus;
    

    
      