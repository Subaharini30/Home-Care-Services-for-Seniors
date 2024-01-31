import React, { useState } from 'react';
import '../assets/css/BookService.css'

const BookService = () => {
    const [formData, setFormData] = useState({
        username: '',
        mobileNumber: '',
        address: '',
        duration: '',
        date: '',
        description: '',
        patientName: '',
        service: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        mobileNumber: '',
        address: '',
        duration: '',
        date: '',
        description: '',
        patientName: '',
        service: '',
    });

    const serviceOptions = [
        { value: 'nursing', label: 'Nursing' },
        { value: 'gardening', label: 'Gardening' },
        { value: 'electronic-repair', label: 'Electronic Repair' },
        { value: 'home-care', label: 'Home Care' },
        { value: 'companion-care', label: 'Companion Care' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};

        // Validate Username
        if (!data.username.trim()) {
            errors.username = 'Username is required';
        }

        // Validate Mobile Number
        if (!data.mobileNumber.trim()) {
            errors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(data.mobileNumber)) {
            errors.mobileNumber = 'Invalid Mobile Number format';
        }

        // Validate Address
        if (!data.address.trim()) {
            errors.address = 'Address is required';
        }

        // Validate Duration
        if (!data.duration.trim()) {
            errors.duration = 'Duration is required';
        }

        // Validate Date
        if (!data.date.trim()) {
            errors.date = 'Date is required';
        }

        // Validate Description
        if (!data.description.trim()) {
            errors.description = 'Description is required';
        }

        // Validate Patient Name
        if (!data.patientName.trim()) {
            errors.patientName = 'Patient Name is required';
        }

        // Validate Service
        if (!data.service) {
            errors.service = 'Service is required';
        }

        return errors;
    };

    return (
        <div className="book-service-container">
            <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="form-group">
                    <label style={{ color: 'black' }}>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                {/* Mobile Number */}
                <div className="form-group">
                    <label style={{ color: 'black' }}>Mobile Number</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                    />
                    {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
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
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                    />
                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>

                {/* Description */}
                <div className="form-group">
                    <label style={{ color: 'black' }}>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    {errors.description && (
                        <div className="invalid-feedback">{errors.description}</div>
                    )}
                </div>

                {/* Patient Name */}
                <div className="form-group">
                    <label style={{ color: 'black' }}>Patient Name</label>
                    <input
                        type="text"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className={`form-control ${errors.patientName ? 'is-invalid' : ''}`}
                    />
                    {errors.patientName && (
                        <div className="invalid-feedback">{errors.patientName}</div>
                    )}
                </div>

                {/* Service Field (Dropdown) */}
                <div className="form-group">
                    <label style={{ color: 'black' }}>Service</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`form-control ${errors.service ? 'is-invalid' : ''}`}
                    >
                        <option value="">Select Service</option>
                        {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                </div>

                <button type="submit" className="btn btn-primary">
                    Book Service
                </button>
            </form>
        </div>
    );
};

export default BookService;
