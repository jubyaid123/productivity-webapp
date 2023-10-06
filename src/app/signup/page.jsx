"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // login logic
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp} className="text-center">
        <div className="mb-4">
          <label className="text-lg black text-center">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div>
        <div className = "mb-4">
        <label className="text-lg block"> Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-64 py-2 px-4 border rounded"
            required
          />
        </div> 
        <button type="submit" className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
      <div>
        <p>
          Already have an account? login <Link href= "/login" className='blue_gradient'>here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup