import React from 'react'
import { useParams } from 'react-router-dom'

const Session = () => {
    const {id}= useParams()
  return (
    <div>Session {id}</div>
  )
}

export default Session