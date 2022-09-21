import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from "react-icons/fa"

const NavBar = () => {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>Sema</Link>

        <ul>
            
          <CustomLink to="/sessions">Sessions</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/profile"><FaUser/></CustomLink>
        </ul>
    </nav>
  )
}

const CustomLink = ({to, children, ...props}) =>{
  const path = window.location.pathname

  return (
    <li className={path=== to? "active": ""}>
      <Link to={to}>{children} </Link>
    </li>
  )
}


export default NavBar