import React from 'react'
import NavLeft from '../component/nav-left'
import { useNavigate } from "react-router-dom";
import { login } from '../api'
export default function Signin({authenticate}) {
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

  const handleLogin = async()=>{
    console.log("LOGINING");
    const {useremail, password} = user;
    // if (validate()){
      login(useremail, password).then(res=>{
        authenticate(res.status);
        localStorage.setItem("useremail",useremail)
        navigate('/users/mylogo');
      }).catch(error=>console.log(error));
    // }
  }
  const handleChange = (e)=>{
    let field_name = e.target.name
    let value =  e.target.value
    user[field_name]= value
  }

  // const validate = ()=>{
  //   console.log("VALIDATING");
  //   if (user.password !== user.confirmpassword){
  //     errs['password']="Passwords don't match"
  //     return false
  //   }
  //   return true
  // }

  const routeSignup = () =>{ 
    navigate('/users/signup');
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
            <div className='form'>
              <div>
              <input type="text" name='useremail' placeholder='User-Id' className='serif' onChange={(e)=>handleChange(e)}/>
              </div>
              <div>
              <input type="password" name='password' placeholder='Password' className='serif' onChange={(e)=>handleChange(e)}/>
              </div>
              <div className='btn-sign-container'><input type="submit" className='btn-primary' id='btn-sign' value="Sign in" onClick={handleLogin}/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
