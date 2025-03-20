import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Axios call to send data to the backend
    axios.post(`http://localhost:4000/usernew`, { userName: fullName, userEmail: email, userPassword: password })
      .then(response => {
        alert(`Success: ${response.data.message}`);
        window.location.href = '/login';
      })
      .catch(error => {
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data}`);
        } else {
          alert("An error occurred during sign-up");
        }
      });
  };

  return (
    <div className="styled-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Sign Up</h2>
        <span className="input-span">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="name" id="name" 
          value={fullName}
          onChange={handleFullNameChange}/>
        </span>

        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" name="email" id="email" 
          value={email}
          onChange={handleEmailChange}/>
        </span>

        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" 
          value={password}
          onChange={handlePasswordChange}/>
        </span>

        <span className="span">
          Already have an account? <Link to="/login">Login</Link>
        </span>
        <input className="submit" type="submit" value="Sign Up"/>
      </form>
    </div>
  );
}


export default Signup;
