import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/User_Register.css';

const User_Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.username.trim()) {
      formErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Passwords must match';
    }

    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9]*$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Invalid phone number';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/User_Login');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='register'>
      <div className='userregistration' style={{paddingBottom:'6.5rem'}}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'black', marginTop: '5rem' }}>Register</h1>

          <div className='userregistrationinputbox'>
            <label htmlFor='username'></label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Username'
              style={{ border: '2px solid black' }}
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.username}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              style={{ border: '2px solid black' }}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.email}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='password'></label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              style={{ border: '2px solid black' }}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.password}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='confirmPassword'></label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              style={{ border: '2px solid black' }}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className='userregistrationinputbox'>
            <label htmlFor='phoneNumber'></label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Phone number'
              style={{ border: '2px solid black' }}
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            {errors.phoneNumber && (
              <div className='error-message' style={{ color: 'black' }}>
                {errors.phoneNumber}
              </div>
            )}
          </div>

          <button className='userregistrationbutton' style={{ backgroundColor: 'blue', color: 'white' }} type='submit'>
            Register
          </button>

          <div className='login-link' style={{ marginTop: '60px' }}>
            <p>
              Already have an account?{' '}
              <Link to='/User_Login'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_Register;
