import React from 'react'
import NavLeft from '../component/nav-left'
import { useNavigate } from "react-router-dom";

export default function Signin() {
  let navigate = useNavigate(); 
  const routeSignup = () =>{ 
    navigate('/signup');
  }
  return (
    <>
      <nav className="flex-r">
        <NavLeft />
      </nav>
      <div className='hero'>
        <div>
          <h3>Sign in</h3>
          <span className='gradient'>mylogo.ai</span>
          <p>If you don't have an account</p>
          <div><button className='btn-secondary' onClick={routeSignup}>Sign up</button></div>
        </div>
        <div>
          <div className='sign-form-container gradient-bg'>
            <span>Sign in</span>
            <hr />
            <form action="#" method="post">
              <div>
              <input type="text" name='userid' placeholder='User-Id' className='serif' />
              </div>
              <div>
              <input type="password" name='password' placeholder='Password' className='serif'/>
              </div>
              <div className='btn-sign-container'><button className='btn-primary' id='btn-sign'>Sign in</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
