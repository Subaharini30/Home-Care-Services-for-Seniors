import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Main.css';
import { FaUserPlus } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";

const MainPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const imgGif = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';
    return (
        <div className="main-page-container">
        <div className='mainpageright'>
        <img src={imgGif} className='imgGif' alt='gif' />
    </div>
            <div className='mainpageleft'>
                <h2>Glad to have you - Golden Years Companion!!!</h2>
                <div className="additional-content">
                <br></br>
                    <p>
                        Golden Years Companion is here to make your experience better.
                        <br></br>
                        Kindly, select your role to experience the feature!!!
                    </p>
                    <br></br>
                    <h2>Please select your role:</h2>

                    <div className='main-buttons'>
                        <div className="button-container">
                            <Link to="/Admin_Login">
                                <button className="admin-button" onClick={() => setSelectedRole('admin')}>
                                <GrUserSettings style={{fontSize:'1.5rem'}}/>Admin
                                </button>
                            </Link>{' '}

                            <Link to="/UserHome">
                                <button className="user-button" onClick={() => setSelectedRole('user')}>
                                <FaUserPlus style={{fontSize:'1.5rem'}}/>User
                                </button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <div className="feature-list">
                        <h3 style={{ marginTop: '10px' }}>Key Features,..</h3>
                        <ul style={{ listStyle: 'none', marginTop: '20px' }}>
                            <li>User-friendly interface for easy navigation</li>
                            <li>Customized experiences based on your role</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;
