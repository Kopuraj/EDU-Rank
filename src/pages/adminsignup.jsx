import React from "react";
import '../styles/adminsignup.css';

const AdminSignup = () =>{
    return (
       <div className="Adsignup-page">
        <div className="wrapper">
          <form action="#">
            <h1>Admin Signup</h1>
            <div className="input-box">
              <input type="text" placeholder="Institution Name" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="User Name" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Institution ID" />
            </div>
            <button type="submit" className="btn">Signup</button>
            <div className="register-link">
              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
        </div>
      );
    }
    
    export default AdminSignup;