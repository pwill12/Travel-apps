import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/signup.css"
import { useAppDispatch, useAppSelector } from '../redux/hooks/Hooks';
import { RegisterUsers } from '../redux/user/RegisterSlice';

function Signup() {

  const user = useAppSelector(state => state.registeruser)
  const dispatch = useAppDispatch()
  const [username, setname] = useState('');
  const [phone, setphone] = useState<Number | string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(RegisterUsers({ username, phone, email, password }));
    // navigate('/verify')
    // if (user.currentUser === null) {
    //   navigate('/verify')
    // }
  };

  console.log(user.currentUser?.isUserVerified)

  useEffect(() => {
    if (user.currentUser?.isUserVerified !== undefined || false) {
      navigate('/verify')
    }
  }, [user.currentUser?.isUserVerified !== undefined || false])
  

  return (
    <div className="signup-form-container">
      <h1>Create an account</h1>
      <h3>Start your journey</h3>
      <form>
        <div className="form-group">
          <label>Name<span className="required-field">*</span></label>
          <input

            type="text"
            placeholder="First Name and Last"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone number<span className="required-field">*</span></label>
          <input
            type="tel"
            placeholder="Phone Number"
            // value={}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setphone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>E-mail<span className="required-field">*</span></label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password<span className="required-field">*</span></label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={handleSubmit}>{user.isFetching ? '...loading' : 'Get Started'}</button>
        <p>{user.error && 'wrong login details'}</p>
        <p>Already have an account?<Link className='login-link' to="/login">Login</Link> </p>
      </form>
    </div>
  );
}


export default Signup
