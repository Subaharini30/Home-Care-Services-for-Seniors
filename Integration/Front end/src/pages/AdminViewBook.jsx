import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/ViewBooking.css';

function AdminViewBook() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication token not found.');
        }
  
        const response = await axios.get('http://localhost:8080/bookings/get', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setBookings(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBookings();
  }, []);

  const handleEdit = (bookingId) => {
    const bookingToEdit = bookings.find((booking) => booking.bookingId === bookingId);
    setEditingBooking(bookingToEdit);
  };

  const handleCancelEdit = () => {
    setEditingBooking(null);
  };

  const handleSaveEdit = async (updatedBooking) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication token not found.');
      }

      await axios.put(`http://localhost:8080/bookings/put/${updatedBooking.name}`, updatedBooking, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBookings((prevBookings) => {
        return prevBookings.map((booking) =>
          booking.bookingId === updatedBooking.bookingId ? updatedBooking : booking
        );
      });

      setEditingBooking(null);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="back">
      <div className="overlay8"></div>

      <div className="bookingform">
        <h2>VIEW BOOKING FORM</h2>
        <div className="row">
          {bookings.map((booking) => (
            <div className="col-sm-6" style={{ width: '18rem', backgroundColor: 'white', color: 'black' }} key={booking.bookingId}>
              <div className="card">
                <div className="card-body">
                  <div>
                    <p>Booking Id: {booking.bookingId}</p>
                    <p>Name: {booking.name}</p>
                    <p>Phone Number: {booking.phoneNumber}</p>
                    <p>Service: {booking.serviceType}</p>
                    <p>Description: {booking.description}</p>
                    <p>Date: {booking.date}</p>
                    <p>Duration: {booking.duration}</p>
                    <p>Care Beneficiary: {booking.careBeneficiary}</p>
                    <p>Address: {booking.address}</p>
                    <p>Status: {booking.status}</p>
                    {editingBooking === booking ? (
                      <>
                        <EditBookingForm booking={booking} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
                      </>
                    ) : (
                      <button onClick={() => handleEdit(booking.bookingId)}>Edit</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EditBookingForm({ booking, onSave, onCancel }) {
  const [updatedBooking, setUpdatedBooking] = useState({ ...booking });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedBooking);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Status: </label>
        <select name="status" value={updatedBooking.status} onChange={handleChange} disabled={booking.status === 'completed'}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="on-going">On-going</option>
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default AdminViewBook;
