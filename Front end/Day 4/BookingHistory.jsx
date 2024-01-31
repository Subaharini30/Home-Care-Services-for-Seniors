import React, { useState, useEffect } from 'react';
import '../assets/css/BookingHistory.css';

const BookingHistory = () => {
  const [bookingHistory, setBookingHistory] = useState([
    {
      id: 1,
      service: 'Nursing',
      date: '2024-02-15',
      status: 'Completed',
    },
    {
      id: 2,
      service: 'Gardening',
      date: '2024-02-20',
      status: 'Pending',
    },
    // Add more booking history objects as needed
  ]);

  return (
    <div className='history'>
    <div className='historycard'>
    <div className="booking-history-container">
      <h2>Booking History</h2>
      {bookingHistory.map((booking) => (
        <div key={booking.id} className="booking-item">
          <p>
            <strong>Service:</strong> {booking.service}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Status:</strong> {booking.status}
          </p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default BookingHistory;
