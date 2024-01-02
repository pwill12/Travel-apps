import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/loginpass.css"
import { useAppSelector } from '../redux/hooks/Hooks';


function PassLogin() {
  const user = useAppSelector(state => state.registeruser)

  const reg = user.currentUser !== null

  


  return (
    <div className='login-pass'>
      <h2>Success</h2>
      <h5>Verification link has been sent to you email</h5>
      <p>Already have an account?<Link className='login-link' to="/login"><span className='login'>Login</span></Link> </p> 
    </div>
  )
}

export default PassLogin
