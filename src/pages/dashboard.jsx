import React from "react";
import '../styles/dashboard.css'

const Dashboard = () =>{
    return(
 <div className="body3">
  <header>
        <div className="header">
          <h1 className="logo">EDU-Rank</h1>
          <div className="button-group">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
          </div>
        </div>
      </header>
        
        <div className="main-content-header">
          <h1>Admin Dashboard</h1>
         <h2>Add Marks of Student</h2>
         <h2>Update Student Marks</h2>
         <h2>Delete the Marks of Student </h2>
         <h2> Data of all Students</h2>
         <h2> Messages by Student</h2>
        </div>
   </div>
  
     

    )
}
export default Dashboard;