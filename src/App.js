import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicDetailsForm from './components/BasicDetailsForm';
import DocumentCollectionForm from './components/DocumentCollectionForm';
import StatementOfPurposeForm from './components/StatementOfPurposeForm';
import InterviewAvailabilityForm from './components/InterviewAvailabilityForm';

const App = () => {
  const [basicDetails, setBasicDetails] = useState({});
  const [documentCollection, setDocumentCollection] = useState({});
  const [statementOfPurpose, setStatementOfPurpose] = useState({});
  const [interviewAvailability, setInterviewAvailability] = useState({});

  const handleBasicDetailsSubmit = (data) => {
    setBasicDetails(data);
    // Move to the next section or save data as needed
  };

  const handleDocumentCollectionSubmit = (data) => {
    setDocumentCollection(data);
    // Move to the next section or save data as needed
  };

  const handleStatementOfPurposeSubmit = (data) => {
    setStatementOfPurpose(data);
    // Move to the next section or save data as needed
  };

  const handleInterviewAvailabilitySubmit = (data) => {
    setInterviewAvailability(data);
    // Save or submit the entire data
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BasicDetailsForm onSubmit={handleBasicDetailsSubmit} />} />
        <Route
          path="/document-collection"
          element={<DocumentCollectionForm onSubmit={handleDocumentCollectionSubmit} />}
        />
        <Route
          path="/statement-of-purpose"
          element={<StatementOfPurposeForm onSubmit={handleStatementOfPurposeSubmit} />}
        />
        <Route
          path="/interview-availability"
          element={<InterviewAvailabilityForm onSubmit={handleInterviewAvailabilitySubmit} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
