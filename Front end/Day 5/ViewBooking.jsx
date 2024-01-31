import '../assets/css/ViewBooking.css';

function ViewBooking() {
  return (
    <div className="background">
      <div className='overlay8'></div>

      <div className="booking-form">
        <h2>VIEW BOOKING FORM</h2>
        <div className="table-container">
          <div className="table-row form-title">
            <div className="header-cell">Booking ID</div>
            <div className="header-cell">User ID</div>
            <div className="header-cell">User Name</div>
            <div className="header-cell">Submission Date</div>
            <div className="header-cell">Service Name</div>
            <div className="header-cell">Booking Status</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ViewBooking;