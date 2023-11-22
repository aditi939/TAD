import React, { useState } from 'react';
// import "../styles/StatementOfPurposeForm.css"
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
    <form onSubmit={handleSubmit}>
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
  );
};

export default StatementOfPurposeForm;
