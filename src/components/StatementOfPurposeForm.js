import React, { useState } from 'react';
import "../components/StatementOfPurposeForm.css"
const StatementOfPurposeForm = ({ onSubmit }) => {
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit data
    onSubmit({ answerA, answerB, answerC });
  };

  return (
    <div className="row-1">
    <div className="column-1 left-1">
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
    <div className="column-1 right-1">
      <div className="right-heading">
        Preview<br></br>
        You will be able to customize the fields in the later stage
      </div>
      <form className="StatementOfPurposeForm" onSubmit={handleSubmit}>
      <label>
        Tell me about a time you were asked to do something you had never done before.
        How did you react? What did you learn?
      </label>
      <textarea
        value={answerA}
        placeholder="Enter a description for a long answer"
        onChange={(e) => setAnswerA(e.target.value)}
        required
        maxLength={300}
      />

      <label>
        Tell me about the last time something significant didn’t go according to plan at work.
        What was your role? What was the outcome?
      </label>
      <textarea
        value={answerB}
        placeholder="Enter a description for a long answer"
        onChange={(e) => setAnswerB(e.target.value)}
        required
        maxLength={300}
      />

      <label>
        What are the three things that are most important to you in a job?
      </label>
      <textarea
        value={answerC}
        placeholder="Enter a description for a long answer"
        onChange={(e) => setAnswerC(e.target.value)}
        required
        maxLength={300}
      />

      <button type="submit">Next</button>
    </form>
    </div>
  </div>
    
  );
};

export default StatementOfPurposeForm;
