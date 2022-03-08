import { React, useState, useEffect } from 'react';
import { getUsers } from '../api'
import {
  Link
} from "react-router-dom";
import logo_img from '../assets/logo.png'
import '../user.css'


export default function UserData({ authenticate }) {
  const [users, setUsers] = useState([]);
  const handleUsers = async () => {
    const userData = await getUsers();
    console.log(userData);
    setUsers(userData)
  }

  // useEffect(()=>{
  //   handleUsers()
  // },[])

  return (
    <>
      <nav className="flex-r">
        <div>
          <Link to='#'><img src={logo_img} alt="LOGO" /></Link>
        </div>
      </nav>
      <div className='left-panel-on'>
        <div className='flex-l'>
          <div className="flex-r">
            <button className='btn-danger' onClick={() => authenticate(false)}>Logout</button>
          </div>
          <span className='serif'>{localStorage.getItem("useremail")}</span>
        </div>
      </div>
      <div className='hero'>fadsdf
      </div>
      <h1>UserData</h1>
      {/* <p>
        {
          users.map((ele, idx)=>{
          <p>ele.useremail</p>
        })
        }
      </p> */}
    </>
  )
}
