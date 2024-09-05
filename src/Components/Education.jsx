import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  educations: Yup.array().of(
    Yup.object().shape({
      formName: Yup.string().required('Form Name is required'),
      degreeName: Yup.string().required('Degree Name is required'),
      instituteName: Yup.string().required('Institute Name is required'),
      cgpa: Yup.number().required('CGPA is required')
    })
  ).required('At least one education is required')
});

const Education = () => {
  return (
    <Formik
      initialValues={{
        educations: [{ formName: '', degreeName: '', instituteName: '', cgpa: '' }]
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleSubmit, isValid, dirty }) => (
        <Form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Education Form</h1>
          <FieldArray name="educations">
            {({ push, remove }) => (
              <>
                {values.educations.map((education, index) => (
                  <div key={index} className="mb-4 border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold">Education {index + 1}</h2>
                      {values.educations.length > 1 && (
                        <button
                          type="button"
                          className="text-red-500"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`formName-${index}`}>
                        Form Name
                      </label>
                      <Field
                        type="text"
                        id={`formName-${index}`}
                        name={`educations[${index}].formName`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`educations[${index}].formName`} component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`degreeName-${index}`}>
                        Degree Name
                      </label>
                      <Field
                        type="text"
                        id={`degreeName-${index}`}
                        name={`educations[${index}].degreeName`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`educations[${index}].degreeName`} component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`instituteName-${index}`}>
                        Institute Name
                      </label>
                      <Field
                        type="text"
                        id={`instituteName-${index}`}
                        name={`educations[${index}].instituteName`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`educations[${index}].instituteName`} component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-2">
                      <label className="block text-sm font-medium mb-1" htmlFor={`cgpa-${index}`}>
                        CGPA
                      </label>
                      <Field
                        type="text"
                        id={`cgpa-${index}`}
                        name={`educations[${index}].cgpa`}
                        className="w-full p-2 border rounded-lg"
                      />
                      <ErrorMessage name={`educations[${index}].cgpa`} component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ formName: '', degreeName: '', instituteName: '', cgpa: '' })}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  disabled={!dirty || !isValid}
                >
                  Add Education
                </button>
              </>
            )}
          </FieldArray>
         
        </Form>
      )}
    </Formik>
  );
};

export default Education;
