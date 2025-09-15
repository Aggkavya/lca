import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/DashBoard';
import NewAssessment from './pages/NewAssesment';
import AssessmentOutput from './pages/AssessmentOutput';
import ContactUdPage from './pages/ContactUsPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-assessment" element={<NewAssessment />} />
        <Route path="/assessment-output" element={<AssessmentOutput />} />
        <Route path="/contact-us" element={<ContactUdPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;