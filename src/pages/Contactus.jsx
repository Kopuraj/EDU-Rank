import React, { useState } from "react";
import '../styles/contactus.css';

const Contactus = () => {
  // Define state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process form data here, e.g., send to an API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-page">
      <div className="main-content-header">
        <form onSubmit={handleSubmit}>
          <h2 className="search">
            How can we help? Feel Free to Contact<br />
            Send Us a Message
          </h2>

          <table className="table">
            <tbody>
              <tr>
                <th className="tblheading">Enter Your Name</th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    className="tbldata"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th className="tblheading">Enter your Email Id</th>
              </tr>
              <tr>
                <td className="tbldata">
                  <input
                    type="email"
                    className="tbldata"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th className="tblheading">Enter your Contact No.</th>
              </tr>
              <tr>
                <td className="tbldata">
                  <input
                    type="text"
                    className="tbldata"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact No"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th className="tblheading">Type your Message</th>
              </tr>
              <tr>
                <td>
                  <textarea
                    className="tbldata1"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type here..."
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <input type="submit" name="submit" value="SEND" className="submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
