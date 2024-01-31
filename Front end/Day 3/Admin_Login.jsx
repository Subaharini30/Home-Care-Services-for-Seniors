import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Login.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const validateLogin = (e) => {
    e.preventDefault(); 

    if (!username && !password) {
      setError('Kindly!! Enter Username and Password');
    } else if (!username) {
      setError('Kindly!! Enter Username');
    } else if (!password) {
      setError('Kindly!! Enter Password');
    } else if (username === 'Admin08' && password === 'Admin123') {
      setError('');
      alert('Login successful!');
      navigate('/AdminHome'); 
    } else if (username === 'admin') {
      setError('Oops:( Invalid Password');
    } else if (password === 'Admin123') {
      setError('Oops:( Invalid Username');
    } else {
      setError('Invalid Username and Password:(');
    }
  };

  return (
    <div className='admin'>
      <div className='adminlogin'>
        <form className='loginform'>
          <h2 style={{ fontFamily: 'italic', marginTop: '20px' }}>Admin Login</h2>
          {error && <div className="error">{error}</div>}
          <input type="text" className='adminInput' id="username" name="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" className='adminInput' id="password" name="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br></br><br></br>
          <center>
            <button className="adminbutton" type="button" style={{ backgroundColor: 'green' }} onClick={(e) => validateLogin(e)}>Login</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
