import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Home from './components/Home/Home'
import AllUsers from './components/allUsers/AllUsers'
import ArticlePallet from './components/ArticlePallet/ArticlePallet'
import MyProfile from './components/myProfie/myProfile'
function App() {
  return (
    <Router>
      <div className="App">
        { <nav className="navbar">
          {/* // <div className="container">
          //   <Link className="navbar-brand" to={'/sign-in'}>
          //     GoSocial
          //   </Link>
          //   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          //     <ul className="navbar-nav ml-auto">
          //       <li className="nav-item">
          //         <Link className="nav-link" to={'/sign-in'}>
          //           Login
          //         </Link>
          //       </li>
          //       <li className="nav-item">
          //         <Link className="nav-link" to={'/sign-up'}>
          //           Sign up
          //         </Link>
          //       </li>
          //     </ul>
          //   </div>
          // </div> */}
        </nav>}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path = "/home" element = {<Home />} />
              <Route path = "/alluser" element = {<AllUsers />} />
              <Route path = "/newsFeed" element = {<ArticlePallet/>} />
              <Route path = "/myprofile" element = {<MyProfile/>} />
              
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App