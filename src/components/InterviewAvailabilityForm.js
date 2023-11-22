import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/DocumentCollectionForm.css"

const InterviewAvailabilityForm = ({ onSubmit }) => {
  const [interviewEmail, setInterviewEmail] = useState('');
  const [location, setLocation] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [interviewMedium, setInterviewMedium] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Do additional validation if needed
    // setAttachment(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit data
    onSubmit({
      interviewEmail,
      location,
      interviewDate,
      interviewTime,
      timeZone,
      interviewMedium,
    });
  };

  return (
    <div className="row">
      <div className="column left">
        <div class="div1-document-form">
        <div className="square-document-form"></div>
        <div className="paragraph-document-form">
            <b className="heading-document-form">Detail Collection</b>
            <p className="text-document-form">
              Collection and information from candidates on their educations,
              work experience, contact no, etc
            </p>
          </div>
        </div>
        <br></br>
        <p className="start-document-form">Explore the following Templates:</p>
        <div class="div1-document-form">
          <div className="square-document-form"></div>

          <div className="paragraph-document-form">
            <b className="heading-document-form">Detail Collection</b>
            <p className="text-document-form">
              Collection and information from candidates on their educations,
              work experience, contact no, etc
            </p>
          </div>
        </div>
        <br></br>
        <div class="div1-document-form">
          <div className="square-document-form"></div>
        
          <div className="paragraph-document-form">
            <b className="heading-document-form">Statement of Purpose</b>
            <p className="text-document-form">
              Start creating a new form with the wide options of field available
            </p>
          </div>
        </div>
        <br></br>
        <div class="div1-document-form">
          <div className="square-document-form"></div>
        
          <div className="paragraph-document-form">
            <b className="heading-document-form">Document Collection</b>
            <p className="text-document-form">
              Save time and efforts:Explore this template to find a set of question required for document collection
            </p>
          </div>
        </div>
        <br></br>
      </div>
      <div className="column right">
      <div className="right-heading">
          Preview<br></br>
          You will be able to customize the fields in the later stage
        </div>
        <form className="DocumentCollectionForm" onSubmit={handleSubmit}>
        <div>
            <h2>Name of the Enquiry Form</h2>
            One line description of the form
            <p>Provide the following information to process your application</p>
          </div>
        
          <div style={{ padding: "50px" }}>
          <label>Email *</label>
          <input
            type="email"
            value={interviewEmail}
            placeholder="Example- userid@gmail.com"
            onChange={(e) => setInterviewEmail(e.target.value)} 
            required
          />

          <label>Location *</label>
          <input
            type="search"
            value={location}
            placeholder="Search and enter your location"
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label>Interview Date *</label>
          <input
            type="date"
            value={interviewDate}
            placeholder="Attach file upto 5kb"
            onChange={(e) => setInterviewDate(e.target.value)}
            required
          />

          <label>Interview Time *</label>
          <input
             type="time" 
             value={interviewTime}
             onChange={(e) => setInterviewTime(e.target.value)}
             required
          />

          <label>Time Zone *</label>
          <input
           type="search" 
           value={interviewTime}
           onChange={(e) => setInterviewTime(e.target.value)}
           required
          />
          <Link to="/statement-of-purpose">Next</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewAvailabilityForm;
