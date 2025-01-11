import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MembersContext = createContext()

function MembersContextProvider({children}) {
    let [members,setMembers] = useState([])
    let [originalMembers,setOriginalMembers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:7070/consulting/")
        .then((res)=>{
            setMembers(res.data)
            setOriginalMembers(res.data)
            
        })
    },[])

    const value = {
        members,setMembers,
        originalMembers,setOriginalMembers
    }
  return (
    <MembersContext.Provider value={value}>
      {children}
    </MembersContext.Provider>
  )
}

export default MembersContextProvider
