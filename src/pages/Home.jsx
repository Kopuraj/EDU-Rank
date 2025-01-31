import React from "react"
import '../styles/Home.css'
 


const Home = () =>{

  

  return (
    <div className="home-page">
     
      <div className="body">
      <img className="image" src="/images/front image1.png" alt="Front Display" />
        <div className="sub-body">
          <div className="text">
          <h2>
            Transforming <br /> Student Performance with <br /> Accurate Reports
          </h2>
          </div>
          
          <div className="main-content-header">
            <form method="post" action="result.php">
              <h2 className="search">REGISTER AND GET YOUR RESULT HERE!</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <th className="standered1">Name</th>
                    <td className="standard2">
                      <input type="text" name="name" required className="box2" />
                    </td>
                  </tr>
                  <tr>
                    <th className="name1">Register Number</th>
                    <td className="name2">
                      <input type="text" name="rollno" required className="box1" />
                    </td>
                  </tr>
                  <tr>
                    <th className="standered1">Grade</th>
                    <td className="standard2">
                      <input type="text" name="grade" required className="box2" />
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colSpan="2">
                      <button type="submit" name="submit" className="submit">
                        RESULT
                      </button>
                      <button type="submit" name="register" className="submit">
                        REGISTER
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
        

      </div>

      <div className="footer-section-contact">
        <h3>Contact us</h3>
        <p>Email: kopurajEdu@gmail.com</p>
        <p>Phone: +94 741125425</p>
      </div>

      <div className="footer-bottom">
        &copy; 2025 TK.com | Designed by Kopuraj T.
      </div>
    </div>
  );
};

export default Home;
