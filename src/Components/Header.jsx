import React from "react";
import '../styles/header.css'
import { useNavigate } from "react-router-dom";


const Headpage = () =>{

    const navigate = useNavigate();  // Use navigate to programmatically change routes

  // Function to handle Admin Login button click
  const goToLogin = () => {
    navigate('/AdminLogin');  // Navigate to the admin login page
  };
  const goToAbout = () => {
    navigate('/AboutUs');  // Navigate to the admin login page
  };
  const goToHome = () => {
    navigate('/');  // Navigate to the admin login page
  };
  const goToContact = () => {
    navigate('/Contactus');  // Navigate to the admin login page
  };
    return(
        <div>
             <header>
        <div className="header">
          <h1 className="logo">EDU-Rank</h1>
          <div className="buton-group">
            <button onClick={goToHome}>Home</button>
            <button onClick={goToContact}>Contact</button>
            <button onClick={goToAbout}>About</button>
            <button onClick={goToLogin}>Admin Login</button>
          </div>
        </div>
        </header>
        </div>

    )
}
 export default Headpage;