import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FavoritesMembers } from '../../context/FavoritesMembers';


function Navbar() {
  let { favorites } = useContext(FavoritesMembers)

  return (
    <div className='Navbar'>
      <div className="container">
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="list">
          <ul>
            <li><NavLink style={({ isActive }) => ({ color: isActive ? "#ff2143" : "black" })}>Home</NavLink></li>
            <li>About</li>
            <li><NavLink to="/add" style={({ isActive }) => ({ color: isActive ? "#ff2143" : "black" })}>Add</NavLink></li>
            <li><NavLink to="/wishlist" style={({ isActive }) => ({ color: isActive ? "#ff2143" : "black" })}>Wishlist({favorites.length})</NavLink></li>
            <li>Contact</li>
          </ul>
          <div className="bar">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
