import React, { useContext } from 'react'
import { MembersContext } from '../../context/MembersContext'

function Members() {
  let { members, setMembers } = useContext(MembersContext)


  return (
    <div className='Members'>
      <div className="container">
        <div className="text">
          <p>Our professional members</p>
          <h1>Our team Members</h1>
        </div>
        <div className="card-wrapper">
          {
            members.map((member) => (
              <div className="card" key={member._id}>
                <div className="image">
                  <img src={member.image} alt="" />
                </div>
                <div className="content">
                  <div className="head">
                    <p>{member.name}</p>
                    <span>{member.specialization}</span>
                  </div>
                  <div className="btns">
                    <button>✖️</button>
                    <button>❤️</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Members
