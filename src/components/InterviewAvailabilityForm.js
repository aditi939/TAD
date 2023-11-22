import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
     <label>Email</label>
      <input
        type="email"
        value={interviewEmail}
        onChange={(e) => setInterviewEmail(e.target.value)}
        required
      />
     <label>Location</label>
      <input
       type="search" 
       value={location}
       onChange={(e) => setLocation(e.target.value)}
       required
       />
     <label>Interview Date</label>
      <input
       type="date" 
       value={interviewDate}
       onChange={(e) => setInterviewDate(e.target.value)}
       required
       />
     <label>Interview Time</label>
      <input
       type="time" 
       value={interviewTime}
       onChange={(e) => setInterviewTime(e.target.value)}
       required
       />
     <label>Time Zone</label>
      <input
       type="search" 
       value={interviewTime}
       onChange={(e) => setInterviewTime(e.target.value)}
       required
       />
      <input
       type="radio" 
       value={interviewMedium}
       onChange={(e) => setInterviewMedium(e.target.value)}
       required
       />

      <button type="submit">Submit</button>
    </form>
  );
};

export default InterviewAvailabilityForm;
