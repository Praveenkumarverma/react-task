/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  return (
        <nav>
    <div className="nav-wrapper #673ab7 deep-purple">
      <Link to="/" className="brand-logo left">Quotes App</Link>
      <ul id="nav-mobile" className="right">
        {
          token ?
          <>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/CreateQuote">CreateQuote</Link></li>
          <li><button className='red btn'onClick={()=>{
            localStorage.removeItem("token")
            navigate('/Login')
          }}>Logout</button></li>
          </>:
        <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
        </>
        }
        
      </ul>
    </div>
  </nav>
  )
}
