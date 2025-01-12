import React, { useContext, useState } from 'react'
import { data, NavLink } from 'react-router'
import { MembersContext } from '../../context/MembersContext'
import axios from 'axios'
import { Helmet } from 'react-helmet'

function Add() {
  let { members, setMembers } = useContext(MembersContext)
  let [image, setImage] = useState("")
  let [name, setName] = useState("")
  let [specialition, setSpecialition] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    let newData = {
      _id: Date.now().toString(),
      name: name,
      image: image,
      specialition: specialition,
      _v: 0
    }
    axios.post("http://localhost:7070/consulting", newData)
      .then((res) => {
        console.log(res.data.data);
        console.log([...members, newData]);
        console.log(newData);
        // setMembers([...members, newData])
      })

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
