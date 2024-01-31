import React, { useState } from 'react';
//import '../assets/css/EditBooking.css'; 

const EditBooking = () => {
  const [formData, setFormData] = useState({
    username: 'John Doe',
    mobileNumber: '123-456-7890',
    address: '123 Main St, Cityville',
    duration: '2 hours',
    date: '2024-02-15',
    description: 'Some details about the booking',
    patientName: 'Jane Doe',
    selectedService: 'nursing',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="edit-booking-container">
      <h1>Edit Booking</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service:</label>
          <select
            id="service"
            name="selectedService"
            value={formData.selectedService}
            onChange={handleInputChange}
          >
            <option value="nursing">Nursing</option>
            <option value="gardening">Gardening</option>
            <option value="electronicRepair">Electronic Repair</option>
            <option value="homeCare">Home Care</option>
            <option value="companionCare">Companion Care</option>
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBooking;
