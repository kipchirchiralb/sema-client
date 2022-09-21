import React, {useContext} from 'react'
import {FaUser} from "react-icons/fa"
import {LoginContext} from "../Contexts/LoginContext"
import {Link, Outlet} from "react-router-dom"



const SessionNav = () => {
    const {username} = useContext(LoginContext)
  return (
    <div>
    <div>
        <Link to="">{username}</Link>
        <Link to="/sessions">Sessions </Link>
        <span><FaUser /></span>
    </div>
    <Outlet />
    </div>
  )
}

export default SessionNav