import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className='Footer'>
     <div className="container">
        <div className="text">
            <span>Copyright ©2025 All rights reserved | This template is made with ❤️ <span style={{color:"#ff2143"}}>by Colorlib</span></span>
        </div>
        <div className="icons">
        <button><FaInstagram /></button>
       <button> <FaFacebook /></button>
       <button><FaTwitter /></button>
       <button><BsTwitterX /></button>
        </div>
     </div>
    </div>
  )
}

export default Footer
