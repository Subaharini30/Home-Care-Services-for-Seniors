import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/ViewBooking.css';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');
        if (!token) {
          throw new Error('Authentication token not found.');
        }
  
        const response = await axios.get(`http://localhost:8080/bookings/get/${name}`, {
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
        <h2>Booking History</h2>
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

export default BookingHistory;
