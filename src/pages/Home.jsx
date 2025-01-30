import React from "react";
import '../styles/Home.css';

const Home = () =>{
  return (
    <div>
      <header>
        <div className="header">
          <h1 className="logo">EDU-Rank</h1>
          <div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Logout</button>
          </div>
        </div>
      </header>
      <div className="main-content-header">
        <h1>Admin Dashboard</h1>
        <h2>
          <a href="addmark.php">⇒ Add Marks of Student</a>
        </h2>
        <h2>
          <a href="updatemark.php">⇒ Update Student Marks</a>
        </h2>
        <h2>
          <a href="deleteform.php">⇒ Delete the Marks of Student</a>
        </h2>
        <h2>
          <a href="allstudentdata.php">⇒ Data of all Students</a>
        </h2>
        <h2>
          <a href="usermassage.php">⇒ Messages by Student</a>
        </h2>
      </div>
    </div>
  );
};

export default Home;