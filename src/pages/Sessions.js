import React from 'react'
import {Link} from 'react-router-dom'


const Sessions = () => {
  return (
    <>
    <div>Sessions</div>
    <hr />
    <Link to='/sessions/new'>Book Session</Link>
    <hr />
    <Link to="/sessions/1">Session one</Link>
    <hr />
    <Link to="/sessions/2">Session two</Link>
    <hr />
    <Link to="/sessions/3">Session three</Link>
    </>
  )
}

export default Sessions