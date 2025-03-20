import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login(){
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/login`, { userEmail, userPassword })
      .then(response => {
        alert(`Success: ${response.data.message}`);
        window.location.href = '/home';
      })
      .catch(error => {
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data}`);
        } else {
          alert('An error occurred');
        }
      });
  };


  return (
    <div className="styled-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="text" name="email" id="email" 
          value={userEmail}
          onChange={handleUserEmailChange}/>
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" 
          value={userPassword}
          onChange={handlePasswordChange}/>
        </span>
        <input className="submit" type="submit" value="Log in" />
        <span className="span">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
