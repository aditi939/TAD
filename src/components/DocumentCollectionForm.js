import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/DocumentCollectionForm.css"

const DocumentCollectionForm = ({ onSubmit }) => {
  const [class10Marksheet, setClass10Marksheet] = useState("");
  const [class12Marksheet, setClass12Marksheet] = useState("");
  const [graduationMarksheet, setGraduationMarksheet] = useState("");
  const [postGraduationMarksheet, setPostGraduationMarksheet] = useState("");
  const [resume, setResume] = useState("");
  const [recommendationLetter, setRecommendationLetter] = useState("");
  const [salarySlips, setSalarySlips] = useState("");
  const [others, setOthers] = useState("");

  const handleFileChange = (e, setterFunction) => {
    const file = e.target.files[0];
    // Do additional validation if needed
    setterFunction(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit data
    onSubmit({
      class10Marksheet,
      class12Marksheet,
      graduationMarksheet,
      postGraduationMarksheet,
      resume,
      recommendationLetter,
      salarySlips,
      others,
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
        <form className="DocumentCollectionForm" onSubmit={handleSubmit}>
        <div>
            <h2>Name of the Enquiry Form</h2>
            One line description of the form
            <p>Provide the following information to process your application</p>
          </div>
        
          <div style={{ padding: "50px" }}>
          <label>Class 10 Marksheet *</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setClass10Marksheet)}
            required
          />

          <label>Class 12 Marksheet *</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setClass12Marksheet)}
            required
          />

          <label>Graduation Marksheet *</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setGraduationMarksheet)}
            required
          />

          <label>Post Graduation Marksheet</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setPostGraduationMarksheet)}
          />

          <label>Resume/CV *</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setResume)}
            required
          />

          <label>Recommendation Letter</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setRecommendationLetter)}
          />

          <label>Salary Slips</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setSalarySlips)}
          />

          <label>Others</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" 
            placeholder="Attach file upto 5kb"
            onChange={(e) => handleFileChange(e, setOthers)}
          />

          {/* <button type="submit">Next</button> */}
          <Link to="/statement-of-purpose">Next</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentCollectionForm;
