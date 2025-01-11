import React from 'react'
import { NavLink } from 'react-router'

function Add() {
  return (
    <div className='Add'>
      <div className="container">
        <h1>Add Formu</h1>
        <form>
          <div className="input">
            <input type="text" placeholder='Add Image' />
          </div>
          <div className="input">
            <input type="text" placeholder='Add Name' />
          </div>
          <div className="input">
            <input type="text" placeholder='Add Specialition' />
          </div>
          <div className="btns">
            <button>Add</button>
            <button><NavLink className="link" to={"/"} >Go Back</NavLink></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add
