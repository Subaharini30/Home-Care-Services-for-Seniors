import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../assets/css/Admin_Login.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const validateLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password
      });

      if (response.status === 202) {
        setError('');
        if (response.data.role === 'ADMIN') { // Check if user is admin
          setError('');
          localStorage.setItem('token', response.data.token); // Store token in local storage
          alert('Login successful!');
          navigate('/AdminHome');
        } 
        else {
          setError('Invalid Email and Password:(');
        }
      } 
      else {
        setError('Invalid Email and Password:(');
      }
    } catch (error) {
      setError('Login failed! Invalid Email and Password:(');
    }
  };

  return (
    <div className='admin'>
      <div className='adminlogin'>
        <form className='loginform'>
          <h2 style={{ fontFamily: 'italic', marginTop: '20px' }}>
            Admin Login
          </h2>
          {error && <div className="error">{error}</div>}
          <input type="text" 
                 className='adminInput' 
                 id="email" 
                 name="email" 
                 placeholder='email' 
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} 
                 required />

          <input type="password" 
                 className='adminInput' 
                 id="password" 
                 name="password" 
                 placeholder='password' 
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)} 
                 required />
          <br></br><br></br>
          <center>
            <button className="adminbutton" 
                    type="button" 
                    style={{ backgroundColor: 'green' }} 
                    onClick={(e) => validateLogin(e)}>
                    Login
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
