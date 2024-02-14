import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/BookService.css';

const BookService = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        duration: '',
        date: '',
        description: '',
        careBeneficiary: '',
        serviceType: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        phoneNumber: '',
        address: '',
        duration: '',
        date: '',
        description: '',
        careBeneficiary: '',
        serviceType: '',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/User_Login');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/bookdto/post', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            if (response.data === 'Booking Confirmed') {
                alert("booked successfully");
                console.log('Service added!', response.data);
                setFormData({
                    name: '',
                    phoneNumber: '',
                    address: '',
                    duration: '',
                    date: '',
                    description: '',
                    careBeneficiary: '',
                    serviceType: '',
                });
            } else if (response.data === 'Provide the registered Username') {
                alert("Provide the registered Username");
            } else if (response.data === 'Oops!! Service Unavailable') {
                alert("Oops!! Service Unavailable");
            }
    
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            alert("unable to book");
            console.error('Form submission failed:', error);
            // Handle error
        }
    };
    

    return (
        <div className='bookservice'>
            <div className='bookcontent'>
                <h1>
                    Service Booking <br></br>- Provide homely experience to the elders,..
                    <Link to='/UserDashboard'><button style={{width:"100px",float:"right",backgroundColor:"green",color:"white",position:'absolute',bottom:0,left:0}}>Back to Dashboard</button></Link>
                </h1>
            </div>
            <div className="book-service-container">
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    {/* Mobile Number */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Mobile Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                        />
                        {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                    </div>

                    <div className="form-group">
                        <label style={{ color: 'black' }}>Service</label>
                        <input
                            type="text"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className={`form-control ${errors.serviceType ? 'is-invalid' : ''}`}
                        />
                        {errors.serviceType && (
                            <div className="invalid-feedback">{errors.serviceType}</div>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Description</label>
                        <textarea
                            name="description"
                            rows='4'
                            style={{ height: '40px' }}
                            value={formData.description}
                            onChange={handleInputChange}
                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        />
                        {errors.description && (
                            <div className="invalid-feedback">{errors.description}</div>
                        )}
                    </div>
                    
                    {/* Duration */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Duration</label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className={`form-control ${errors.duration ? 'is-invalid' : ''}`}
                        />
                        {errors.duration && <div className="invalid-feedback">{errors.duration}</div>}
                    </div>

                    {/* Date */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Date</label>
                        <input
                            type="text"
                            placeholder='yyyy-mm-dd'
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                        />
                        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                    </div>

                    {/* Patient Name */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Patient Name</label>
                        <input
                            type="text"
                            name="careBeneficiary"
                            value={formData.careBeneficiary}
                            onChange={handleInputChange}
                            className={`form-control ${errors.careBeneficiary ? 'is-invalid' : ''}`}
                        />
                        {errors.careBeneficiary && (
                            <div className="invalid-feedback">{errors.careBeneficiary}</div>
                        )}
                    </div>

                    {/* Address */}
                    <div className="form-group">
                        <label style={{ color: 'black' }}>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Book Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookService;
