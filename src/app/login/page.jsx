"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-3xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="text-center">
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
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
      <div>
        <p>
          Don't have an account? Sign up <Link href="/signup" className='blue_gradient'>here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login