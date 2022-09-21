import React, { useState } from 'react'
import Login from "../components/Login"
import UserProfile from "../components/UserProfile"

import { LoginContext } from '../Contexts/LoginContext'

const ProfilePage = () => {
    const [username, setUserName] = useState("")
    const [showProfile, setShowProfile] = useState(false)
    // const hideLoginForm = ()=>{
    //     // set display none to login form
    // }
  return (
    <>
    <LoginContext.Provider value={{username, setUserName, setShowProfile}}>
        {showProfile? <UserProfile/> : <Login/>}
    </LoginContext.Provider>
    </>
  )
}

export default ProfilePage