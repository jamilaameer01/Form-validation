import React, { useState } from 'react';
import * as Yup from 'yup'


const Formyup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: ''
  });
  const [errors, setErrors] = useState({});
const validationSchema = Yup.object({
    name: Yup.string().required("This required"),
    email: Yup.string().required("This required").email("invalid"),
    phone: Yup.string().required("This required") .matches(/^\d{10}$/, "Phone Number must be 10 digits"),
    portfolio: Yup.string(),
})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
        await validationSchema.validate(formData, {abortEarly: false});
      console.log("Form Submitted", formData); 
    }  catch (error) {
        const newErrors = {};
  
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
  
        setErrors(newErrors);
      }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">YUP Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="portfolio" className="block text-gray-700">Portfolio Link (Optional)</label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        

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

export default Formyup;
