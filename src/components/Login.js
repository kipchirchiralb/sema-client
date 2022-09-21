import {useContext} from 'react'
import {LoginContext} from "../Contexts/LoginContext"

const Login = () => {
  const {setUserName, setShowProfile} = useContext(LoginContext)
  const hideLoginForm = ()=>{}
  return (
    <div className="container ">
       <form>
       
        <input 
            type="text" 
            placeholder="Username...."
            onChange={(e)=>setUserName(e.target.value)}
        />
        <br />
        <input 
            type="password"
            placeholder="Password..."
        />
        <br />
        <button onClick={()=>{
            hideLoginForm()
            setShowProfile(true)
            }}>
            LOGIN
        </button>
        
    </form>
    </div>
  )
}

export default Login