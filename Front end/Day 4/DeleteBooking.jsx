import { useState } from 'react';
import '../assets/css/DeleteBooking.css';

const DeleteBooking = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    serviceProvider: '',
    description: '',
    charges: '',
    timing: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSearch = () => {
    // Add logic for search functionality
    console.log('Search button clicked!');
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>DELETE BOOKING FORM</h2>

        {/* Search Input */}
        <div className="search">
          <input
            type="text"
            placeholder="Search by User Name"
            onChange={handleChange}
            value={formData.serviceName}
          />
          <button type="button" className='search' onClick={handleSearch}>
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteBooking;