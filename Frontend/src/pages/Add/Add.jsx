import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Helmet } from 'react-helmet'
import { useAddConsultingMutation, useGetConsultingQuery } from '../../App/slices/ConsultingSlice'

function Add() {
  let { data, refetch } = useGetConsultingQuery()
  let [addConsulting] = useAddConsultingMutation()
  let [image, setImage] = useState("")
  let [name, setName] = useState("")
  let [specialition, setSpecialition] = useState("")
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    let newConsulting = {
      name: name,
      image: image,
      specialition: specialition,
    }
    await addConsulting(newConsulting)
    refetch()
    navigate("/")
    console.log(data);
    
    console.log(newConsulting);

    setImage('')
    setName('')
    setSpecialition('')

  }
  return (

    <>
      <Helmet>
        <title>Add Page</title>
        <link rel="icon" href="https://is.gd/VYU5Ef" type="image/x-icon" />
      </Helmet>
      <div className='Add'>
        <div className="container">
          <h1>Add Formu</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input">
              <input type="text" placeholder='Add Image'
                value={image}
                onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="input">
              <input type="text" placeholder='Add Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
              <input type="text" placeholder='Add Specialition'
                value={specialition}
                onChange={(e) => setSpecialition(e.target.value)} />
            </div>
            <div className="btns">
              <button>Add</button>
              <button><NavLink className="link" to={"/"} >Go Back</NavLink></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add
