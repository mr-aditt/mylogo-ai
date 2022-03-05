import React from 'react'
import NavLeft from '../component/nav-left'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  let navigate = useNavigate(); 
  const routeSignin = () =>{ 
    navigate('/signin');
  }
  
  return (
    <>
      <nav className="flex-r">
        <NavLeft />
      </nav>
      <div className='hero'>
        <div>
          <h3>Sign up</h3>
          <span className='gradient'>mylogo.ai</span>
          <p>If you already have an account</p>
          <div><button className='btn-secondary' onClick={routeSignin}>Sign in</button></div>
        </div>
        <div>
          <div className='sign-form-container gradient-bg'>
            <span>Sign up</span>
            <hr />
            <form action="#" method="post">
            <div>
              <input type="email" name='useremail' placeholder='Email' className='serif' />
              </div>
              <div>
              <input type="text" name='userid' placeholder='User-Id' className='serif' />
              </div>
              <div>
              <input type="password" name='password' placeholder='Password' className='serif'/>
              </div>
              <div>
              <input type="password" name='confirmpassword' placeholder='Confirm Password' className='serif'/>
              </div>
              <div className='btn-sign-container'><button className='btn-primary' id='btn-sign'>Sign in</button></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
