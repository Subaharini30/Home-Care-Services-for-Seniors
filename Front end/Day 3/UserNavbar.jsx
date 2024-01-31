import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/UserNavbar.css";
import React, { useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

function UserNavbar() {
    const navRef = useRef();

    const toggleMenu = () => {
        navRef.current.classList.toggle("show");
    };

    const closeMenu = () => {
        navRef.current.classList.remove("show");
    };

    const logoUrl = 'https://thumbs.dreamstime.com/b/elderly-caring-nurse-home-care-logo-design-vector-symbol-graphic-concept-business-roof-hand-house-real-sweet-illustration-168953811.jpg';

    return (
            <div className="navheader">
                <img src={logoUrl} className="userlogo" alt="logo" />
                <div className="navlink" ref={navRef}>
                    <ul>
                        <li>
                        <ScrollLink to='UserHome' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Home</ScrollLink>
                        </li>
                        <li>
                        <ScrollLink to='service' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Services</ScrollLink>
                        </li>
                        <li>
                        <ScrollLink to='about' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">About Us</ScrollLink>
                        </li>
                        <li>
                        <ScrollLink to='contact' smooth={true} duration={500} onClick={closeMenu} className="usernavlink">Contact Us</ScrollLink>
                        </li>
                        <li>
                        <Link to='/User_Login' className="usernavlink" onClick={closeMenu}>Login</Link>
                        </li>
                    </ul>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={toggleMenu}>
                        <FaTimes />
                    </button>
                </div>
                <button
                    className="nav-btn"
                    onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>
    );
}

export default UserNavbar;
