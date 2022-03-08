import {React, useState} from 'react'
import NavLeft from '../component/nav-left'
import { useNavigate } from 'react-router-dom';
import { register } from '../api'



export default function Signup({authenticate}) {

  const user = {
    useremail:'',
    password:'',
    confirmpassword:''
  }
  const errs = {
    useremail:'',
    password:''
  }
  let navigate = useNavigate(); 

  const handleRegister = async()=>{
    console.log("REGISTERING");
    const {useremail, password} = user;
    if (validate()){
      register(useremail, password).then(res=>{
        authenticate(res.status);
        localStorage.setItem("useremail",useremail)
        navigate('/users/mylogo');
      }).catch(error=>console.log(error));
    }
  }
  const handleChange = (e)=>{
    let field_name = e.target.name
    let value =  e.target.value
    user[field_name]= value
  }

  const validate = ()=>{
    console.log("VALIDATING");
    if (user.password !== user.confirmpassword){
      errs['password']="Passwords don't match"
      return false
    }
    return true
  }


  const routeSignin = () =>{ 
    navigate('/users/signin');
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
            <div className='form'>
            <div>
              <input type="email" name='useremail' id='useremail' placeholder='Email' className='serif' onChange={(e)=>handleChange(e)}/>
              </div>
              <div>
              <input type="password" name='password' id='password' placeholder='Password' className='serif' onChange={(e)=>handleChange(e)}/>
              </div>
              <div>
              <input type="password" name='confirmpassword' placeholder='Confirm Password' className='serif' onChange={(e)=>handleChange(e)}/>
              <div className="text-danger">{errs.password}</div>
              </div>
              <div className='btn-sign-container'><input type="submit" className='btn-primary' id='btn-sign' value="Sign up" onClick={handleRegister}/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
