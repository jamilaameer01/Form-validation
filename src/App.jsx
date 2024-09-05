import './App.css'
import React, { useState } from 'react';
import PersonalFormPage from './Pages/PersonalFormPage';
import EducationFormPage from './Pages/EducationFormPage';
import ExperienceFormPage from './Pages/ExperienceFormPage';


const App = () => {
  const [currentPage, setCurrentPage] = useState('personal');

  const handleNext = () => {
    if (currentPage === 'personal') {
      setCurrentPage('education');
    } else if (currentPage === 'education') {
      setCurrentPage('experience');
    }
  };

  const handleBack = () => {
    if (currentPage === 'education') {
      setCurrentPage('personal');
    } else if (currentPage === 'experience') {
      setCurrentPage('education');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      
      {currentPage === 'personal' && <PersonalFormPage onNext={handleNext} />}
      {currentPage === 'education' && (
        <EducationFormPage onBack={handleBack} onNext={handleNext} />
      )}
      {currentPage === 'experience' && (
        <ExperienceFormPage onBack={handleBack} onNext={handleNext} />
      )}
      
    </div>
  );
};

export default App;
