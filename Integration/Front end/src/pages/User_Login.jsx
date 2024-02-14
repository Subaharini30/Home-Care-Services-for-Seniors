import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import '../assets/css/User_Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

const User_Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const validateForm = () => {
        let formErrors = {};

        if (!email.trim()) {
            formErrors.email = 'Email is required';
        }

        if (!password.trim()) {
            formErrors.password = 'Password is required';
        }

        return formErrors;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
                if (response.data.token) { 
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('name',response.data.name);
                    if (response.data.role === 'USER') { 
                        setTimeout(() => {
                            console.log('Login response:', response.data);
                            navigate('/UserDashboard');
                        }, 2000);
                    } 
                    else {
                        setErrors('Invalid Email and Password:(');
                    }
                } 
                else {
                    setErrors('Token not received');
                }
            } catch (error) {
                console.error('Login error:', error.response.data);
                setErrors({ email: 'Login failed. Please check your credentials.' });
            }
        } else {
            setErrors(formErrors);
        }
    };
    

    return (
        <div style={{ paddingLeft: '35rem', paddingTop: '16.5rem' }} className='logincontainer'>
            <div className='userlogin'>
                <form onSubmit={handleLogin}>
                    <h1 style={{ color: 'black', marginTop: '0' }}>Login</h1>
                    <div className='userlogininputbox'>
                        {errors.email && <div className='error-message' style={{ color: 'red' }}>{errors.email}</div>}
                        <input
                            type='text'
                            placeholder='email'
                            name='email'
                            value={email}
                            style={{border:'2px solid black'}}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                            <FaUser className='icon' />
                            </div>
                            <div className='userlogininputbox'>
                            {errors.password && <div className='error-message' style={{ color: 'red' }}>{errors.password}</div>}
                            <input
                            type='password'
                            placeholder='Password'
                            style={{border:'2px solid black'}}
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className='icon' />
                    </div>
                    <br></br>
                    <div className='remember-forgot'>
                        <label style={{ color: 'black', paddingRight: '50px' }}>
                            <input
                                type='checkbox'
                                name='rememberMe'
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                style={{ textAlign: 'left' }}
                            />
                            Remember me
                        </label>
                        <a href='#' style={{ textAlign: 'right',fontWeight:'600' }}>Forgot password?</a>
                    </div>
                        <button className='userloginbutton' type='submit'>Login</button>
                    <div className='register-link'>
                        <p>
                            Don't have an account?
                            <Link to="/User_Register" className='link'>{' '}Register here.
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default User_Login;
