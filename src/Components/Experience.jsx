import React, { useState } from 'react';

const Experience = () => {
  const [experienceType, setExperienceType] = useState('freshner');
  const [workExperiences, setWorkExperiences] = useState([{
    companyName: '',
    position: '',
    destination: ''
  }]);

  const handleExperienceTypeChange = (event) => {
    setExperienceType(event.target.value);
  };

  const handleInputChange = (index, event) => {
    const values = [...workExperiences];
    values[index][event.target.name] = event.target.value;
    setWorkExperiences(values);
  };

  const handleAddWorkExperience = () => {
    setWorkExperiences([...workExperiences, { companyName: '', position: '', destination: '' }]);
  };

  const handleRemoveWorkExperience = (index) => {
    const values = [...workExperiences];
    values.splice(index, 1);
    setWorkExperiences(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', {
      experienceType,
      workExperiences,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Work Experience Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Are you Freshner or Experienced?</label>
          <select
            value={experienceType}
            onChange={handleExperienceTypeChange}
            className="block w-full border border-gray-300 p-2 rounded"
          >
            <option value="freshner">Freshner</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {experienceType === 'experienced' && (
          <div>
            {workExperiences.map((workExperience, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
                <h2 className="text-xl font-semibold mb-2">Work Experience {index + 1}</h2>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={workExperience.companyName}
                    onChange={(event) => handleInputChange(index, event)}
                    className="block w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={workExperience.position}
                    onChange={(event) => handleInputChange(index, event)}
                    className="block w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium mb-1">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={workExperience.destination}
                    onChange={(event) => handleInputChange(index, event)}
                    className="block w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveWorkExperience(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddWorkExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Another Work Experience
            </button>
          </div>
        )}
        
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>

        
      </form>
    </div>
  );
};

export default Experience;
