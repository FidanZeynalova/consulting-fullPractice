import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { RiMailSettingsFill } from "react-icons/ri";
import { FaBedPulse } from "react-icons/fa6";
function Services() {
  return (
    <div className='Services'>
      <div className="container">
        <div className="text">
          <p>Our Top Services</p>
          <h1>Our Top Services</h1>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="img">
              <IoMdSettings />
            </div>
            <h2>Strategy Planning</h2>
            <span>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</span>
          </div>
          <div className="card">
            <div className="img">
              <RiMailSettingsFill />
            </div>
            <h2>Insurance Service</h2>
            <span>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</span>
          </div>
          <div className="card">
            <div className="img">
              <FaBedPulse />
            </div>
            <h2>Audit & Evaluation</h2>
            <span>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
