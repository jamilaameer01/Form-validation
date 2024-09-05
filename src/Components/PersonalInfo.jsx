
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{11}$/, 'Phone number must be  11 digits')
    .required('Phone number is required'),

});

const PersonalInfo = ({ onFormStatusChange }) => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Personal Information Form</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          portfolio: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Form submitted:', values);
          onFormStatusChange(true); // Inform parent about successful form submission
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="portfolio" className="block text-gray-700">Portfolio Link (Optional)</label>
              <Field
                type="url"
                id="portfolio"
                name="portfolio"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="portfolio" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfo;
