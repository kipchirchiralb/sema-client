import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./pages/Home"
import Sessions from "./pages/Sessions"
import Error from "./pages/Error"
import About from "./pages/About"
import Session from "./components/Session"
import NewSession from "./components/NewSession"
import ProfilePage from "./pages/ProfilePage"
import SessionNav from "./components/SessionNav"

const App = () => {
  return (
    <>
    <NavBar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>}  />

      <Route path="sessions" element = {<SessionNav/>}>
          <Route index element={<Sessions/>} />
          <Route path=":id" element={<Session/>} />
          <Route path="new" element={<NewSession/>} />
      </Route>
      <Route path="profile" element={<ProfilePage/>} />
        
        
      
      
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
    </>
  )
}

export default App