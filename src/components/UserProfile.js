import {useContext} from 'react'
import userImg from "../images/boson.jpg"
import {LoginContext} from "../Contexts/LoginContext"

const UserProfile = () => {
  const {username} = useContext(LoginContext)
  return (
    <section className="user-profile">
        <p> Hello {username}</p>
        
        <img style={{height: '150px'}} src={userImg} alt="user Profile" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, dolorem. Incidunt et excepturi, aspernatur, quas voluptatem corrupti nulla optio sint, atque voluptate qui voluptatum eveniet ut consectetur iusto modi odit.</p>
    </section>
  )
}

export default UserProfile