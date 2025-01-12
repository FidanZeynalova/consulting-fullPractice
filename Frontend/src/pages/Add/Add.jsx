import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Add() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      specialition: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Name must be at least 5 characters')
        .max(20, 'Name must be 20 characters or less')
        .required('Name is required'),
      image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
      specialition: Yup.string()
        .min(5, 'Specialition must be at least 5 characters')
        .max(20, 'Specialition must be 20 characters or less')
        .required('Specialition is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:7070/consulting', values);
        navigate('/'); // Form uğurla göndərildikdən sonra yönləndir
      } catch (error) {
        console.error('Error adding consulting:', error);
      }
    },
  });

  return (
    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="icon" href="https://is.gd/VYU5Ef" type="image/x-icon" />
      </Helmet>
      <div className="Add">
        <div className="container">
          <h1>Add Formu</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="input">
              <input
                type="text"
                name="image"
                placeholder="Add Image"
                value={formik.values.image}
                onChange={formik.handleChange}
              />
              {formik.touched.image && formik.errors.image && (
                <div className="error" style={{ color: "red" }}>{formik.errors.image}</div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="name"
                placeholder="Add Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error" style={{ color: "red" }}>{formik.errors.name}</div>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                name="specialition"
                placeholder="Add Specialition"
                value={formik.values.specialition}
                onChange={formik.handleChange}
              />
              {formik.touched.specialition && formik.errors.specialition && (
                <div className="error" style={{ color: "red" }}>{formik.errors.specialition}</div>
              )}
            </div>
            <div className="btns">
              <button type="submit">Add</button>
              <NavLink className="link" to="/">
                <button type="button">Go Back</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
