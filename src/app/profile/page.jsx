'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'



const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // Retrieve user info from localStorage
    const storedFirstName = localStorage.getItem('userFirstName');
    const storedLastName = localStorage.getItem('userLastName');
    const storedEmail = localStorage.getItem('userEmail');

      setFormData(prevFormData => ({
        ...prevFormData,
        firstName: storedFirstName || prevFormData.firstName,
        lastName: storedLastName || prevFormData.lastName,
        email: storedEmail || prevFormData.email
      }));
    
  }, []);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Handle saving the form data (update user info)
    setIsEditing(false);
    // Send formData to your server to update user information
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handlePasswordUpdate = () => {
    // Handle updating the password
    // Validate passwords, check if they match, etc.
    // Send passwordData to your server to update the password
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleTimerClick = (e) => {
    <Link href='/signup'></Link>
    
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white max-w-md mx-auto rounded shadow overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            
          {isEditing ? (
            <div className='max-w-md mx-auto mt-8 p-8 border rounded shadow'>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mb-2 p-2 border w-full"
                    />

                    {/* Repeat similar input fields for other user information */}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mb-2 p-2 border w-full"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mb-2 p-2 border w-full"
                    />

                    <div className="flex justify-center">
                        <button type="button" onClick={handleSaveClick} className="bg-blue-500 text-white p-2 px-4 mr-2 rounded-[5px]">
                        Save
                        </button>
                        <button type="button" onClick={() => setIsEditing(false)} className="bg-black text-white p-2 rounded-[5px]">
                        Cancel
                        </button>
                    </div>
                </form>
            </div>
            
          ) : (
            <div className='max-w-md mx-auto mt-8 p-8 border rounded shadow'>
                <div className="flex justify-between items-center mb-4 flex-col">
                    
                    <Image className='items-center mt-5 rounded-full'
                        src='/assets/profile.svg'
                        alt=''
                        width={80}
                        height={80}
                    />
                    {/* Display user information fields */}
                    <p><strong>First Name:</strong> {formData.firstName}</p>
                    <p><strong>Last Name:</strong> {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    
                    <button type="button" onClick={handleEditClick} className="bg-blue-500 text-white p-2 px-4 mt-2 rounded-[5px]">
                        Edit
                    </button>
                </div>
            </div>
          )}

            {/* Password section */}
          <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow">
            <h2 className="text-lg font-bold mb-2">Change Password</h2>
            <form>
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="mb-2 p-2 border w-full"
              />

              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="mb-2 p-2 border w-full"
              />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="mb-2 p-2 border w-full"
              />

              <div className="flex items-center justify-center">
                <button type="button" onClick={handlePasswordUpdate} className="bg-blue-500 text-white p-2 rounded-[5px]">
                  Update Password
                </button>
              </div>
            </form>
          </div>
          <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow">
            <h2 className="text-lg font-bold mb-2">Pomodoro Timer</h2>
              <Link href='/timer' className="flex items-center justify-center bg-blue-500 text-white p-2 rounded-[5px]">
                 Start Timer
              </Link>


          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;

