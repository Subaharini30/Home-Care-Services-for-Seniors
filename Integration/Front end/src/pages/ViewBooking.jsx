import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/ViewBooking.css';

function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editBookingId, setEditBookingId] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');

        if (!token) {
          throw new Error('Authentication token not found.');
        }

        const response = await axios.get(`http://localhost:8080/bookdto/get/${name}`, {
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

  const handleEdit = (bookingId, booking) => {
    setEditBookingId(bookingId);
    setEditedBooking({ ...booking }); // Make a copy of the booking object
  };

  const handleSaveChanges = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Authentication token not found.');
      }

      await axios.put(`http://localhost:8080/bookdto/put/${bookingId}`, editedBooking, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedBookings = bookings.map(booking => {
        if (booking.bookingId === bookingId) {
          return editedBooking;
        }
        return booking;
      });

      setBookings(updatedBookings);
      setEditBookingId(null);
      setEditedBooking({});
    } catch (error) {
      setError(error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Authentication token not found.');
      }

      await axios.delete(`http://localhost:8080/bookdto/delete/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBookings(bookings.filter(booking => booking.bookingId !== bookingId));
    } catch (error) {
      setError(error);
    }
  };

  const handleCancelEdit = () => {
    setEditBookingId(null);
    setEditedBooking({});
  };

  const handleChange = (e, field) => {
    setEditedBooking({ ...editedBooking, [field]: e.target.value });
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
            <div key={booking.bookingId} className="col-sm-6" style={{ width: '18rem', backgroundColor: 'white', color: 'black' }}>
              <div className="card">
                <div className="card-body">
                  <div>
                    {editBookingId === booking.bookingId ? (
                      <div>
                      <label>User Name:</label>
                        <input
                          type="text"
                          value={editedBooking.name || booking.name}
                          onChange={(e) => handleChange(e, 'name')}
                          disabled
                        />
                        <label>Phone Number:</label>
                        <input
                          type="text"
                          value={editedBooking.phoneNumber || booking.phoneNumber}
                          onChange={(e) => handleChange(e, 'phoneNumber')}
                        />
                        <label>Service Type:</label>
                        <input
                          type="text"
                          value={editedBooking.serviceType || booking.serviceType}
                          onChange={(e) => handleChange(e, 'serviceType')}
                        />
                        <label>Description:</label>
                        <input
                          type="text"
                          value={editedBooking.description || booking.description}
                          onChange={(e) => handleChange(e, 'description')}
                        />
                        <label>Date:</label>
                        <input
                          type="text"
                          value={editedBooking.date || booking.date}
                          onChange={(e) => handleChange(e, 'date')}
                        />
                        <label>Duration:</label>
                        <input
                          type="text"
                          value={editedBooking.duration|| booking.duration}
                          onChange={(e) => handleChange(e, 'duration')}
                        />
                        <label>Care Beneficiary:</label>
                        <input
                          type="text"
                          value={editedBooking.careBeneficiary|| booking.careBeneficiary}
                          onChange={(e) => handleChange(e, 'careBeneficiary.')}
                        />
                        <label>Address:</label>
                        <input
                          type="text"
                          value={editedBooking.address || booking.address}
                          onChange={(e) => handleChange(e, 'address')}
                        />
                        <button onClick={() => handleSaveChanges(booking.bookingId)}>Save Changes</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                      </div>
                    ) : (
                      <div>
                        <p>Booking Id: {booking.bookingId}</p>
                        <p>Name: {booking.name}</p>
                        <p>Phone Number: {booking.phoneNumber}</p>
                        <p>Service: {booking.serviceType}</p>
                        <p>Desription: {booking.description}</p>
                        <p>Date: {booking.date}</p>
                        <p>Duration: {booking.duration}</p>
                        <p>Care Beneficiary: {booking.careBeneficiary}</p>
                        <p>Address: {booking.address}</p>
                        <p>Status: {booking.status}</p>
                        <button onClick={() => handleEdit(booking.bookingId, booking)}>Edit</button>
                        <button onClick={() => handleDelete(booking.bookingId)}>Delete</button>
                      </div>
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

export default ViewBooking;
