import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/BasicDetailsForm.css";

const BasicDetailsForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit data
    onSubmit({ name, email, mobileNumber, dob });
  };

  return (
    <div className="row">
      <div className="column left">
        <div class="div1">
          <div className="square">
          {/* <span style={{ fontSize: "70px" }}>&#9632;</span> */}
          </div>

          <div className="paragraph">
            <b className="heading">Detail Collection</b>
            <p className="text">
              Collection and information from candidates on their educations,
              work experience, contact no, etc
            </p>
          </div>
        </div>
        <br></br>
        <p className="start">Explore the following Templates:</p>
        <div class="div1">
          <div className="square"></div>

          <div className="paragraph">
            <b className="heading">Detail Collection</b>
            <p className="text">
              Collection and information from candidates on their educations,
              work experience, contact no, etc
            </p>
          </div>
        </div>
        <br></br>
        <div class="div1">
          <div className="square"></div>

          <div className="paragraph">
            <b className="heading">Document Collection</b>
            <p className="text">
              Save time and efforts:Explore this template to find a set of
              question required for document collection
            </p>
          </div>
        </div>
        <br></br>
        <div class="div1">
          <div className="square">
           
          </div>
          
          <div className="paragraph">
            <b className="heading">Statement of Purpose</b>
            <p className="text">
              Start creating a new form with the wide options of field available
            </p>
          </div>
        </div>
        <br></br>
        <div class="div1">
          <div className="square"></div>

          <div className="paragraph">
            <b className="heading">Interview Availability</b>
            <p className="text">
              Start creating a new form with the wide options of fiels available
            </p>
          </div>
        </div>
      </div>
      <div className="column right">
        <div className="right-heading">
          Preview<br></br>
          You will be able to customize the fields in the later stage
        </div>
        <form className="BasicDetailsForm" onSubmit={handleSubmit}>
          <div>
            <h2>Name of the Enquiry Form</h2>
            One line description of the form
            <p style={{ color: "gray" }}>
              Provide the following information to process your application
            </p>
          </div>

          <div style={{ padding: "50px" }}>
            <label>Name *</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email *</label>
            <input
              type="email"
              value={email}
              placeholder="Example - userid@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Date Of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />

            <label>Contact no</label>
            <input
              type="tel"
              value={mobileNumber}
              placeholder="Enter your 10 digit contact number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            {/* <button type="submit">Next</button> */}
            <Link to="/document-collection">Next</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
