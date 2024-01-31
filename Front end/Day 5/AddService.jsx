import { useState } from 'react';
import '../assets/css/AddService.css';

const AddService = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    serviceProvider: '',
    description: '',
    charges: '',
    timing: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', formData);

  };

  const handleAddService = () => {
    console.log('Service added!', formData);
  };

  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>ADD SERVICE FORM</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="serviceName">Service Name</label>
          <input type="text" name="serviceName" id="serviceName" onChange={handleChange} required />

          <label htmlFor="serviceProvider">Service Provider</label>
          <input type="text" name="serviceProvider" id="serviceProvider" onChange={handleChange} required />

          <label htmlFor="description">Service Description</label>
          <textarea name="description" id="description" onChange={handleChange} required />

          <label htmlFor="charges">Charges</label>
          <input type="number" name="charges" id="charges" onChange={handleChange} required />

          <label htmlFor="timing">Timing</label>
          <input type="time" name="timing" id="timing" onChange={handleChange} required />

          

        </form>

        <button type="button" onClick={handleAddService}>Add Service</button>
      </div>
    </div>
  );
};

export default AddService;