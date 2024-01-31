import React, { useState } from 'react';
import '../assets/css/Profile.css';

const Profile = ({ user }) => {
  const [isEditing, setEditing] = useState(false);

  const userData = {
    fullName: 'Subaharini N',
    email: 'suba@gmail.com',
    mobileNumber: '7896541223',
  };

  const [editedUser, setEditedUser] = useState({ ...userData, ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    console.log('Saving changes:', editedUser);
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <form>
        <div className="field-box">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="edit-input"
            type="text"
            id="fullName"
            name="fullName"
            value={editedUser.fullName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="email">Email:</label>
          <input
            className="edit-input"
            type="email"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className="edit-input"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={editedUser.mobileNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="save-button" type="button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
