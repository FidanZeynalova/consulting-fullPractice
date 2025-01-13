import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useGetConsultingQuery } from '../../App/slices/ConsultingSlice';

function Add() {
  let {refetch} = useGetConsultingQuery()
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      specialization: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Name must be at least 5 characters')
        .max(20, 'Name must be 20 characters or less')
        .required('Name is required'),
      image: Yup.string()
        .url('Invalid URL format')
        .required('Image URL is required'),
      specialization: Yup.string()
        .min(5, 'specialization must be at least 5 characters')
        .max(20, 'specialization must be 20 characters or less')
        .required('specialization is required'),
    }),
    onSubmit: async (values) => {
      await axios.post('http://localhost:7070/consulting', values);
     refetch()
      navigate('/')
    }
  })

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
                name="specialization"
                placeholder="Add specialization"
                value={formik.values.specialization}
                onChange={formik.handleChange}
              />
              {formik.touched.specialization && formik.errors.specialization && (
                <div className="error" style={{ color: "red" }}>{formik.errors.specialization}</div>
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
