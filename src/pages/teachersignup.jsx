import React from "react";
import '../styles/teachersignup.css';

const TeacherSignup = () =>{


return (
    <div className="Teachersignup-page"> 
    <div className="wrapper">
      <form action="#">
        <h1>Teacher Signup</h1>

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

export default TeacherSignup;