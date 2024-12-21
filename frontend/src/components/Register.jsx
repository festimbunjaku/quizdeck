import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');  // Clear previous errors

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email,
        password,
        password_confirmation
      });
      
      console.log('Registration successful:', response.data);
      navigate('/login');  // Redirect to login page after successful registration
    } catch (error) {
      console.error("There was an error registering:", error);
      setError('Registration failed, please try again.');
    }
  };

  return (
    <div className="mt-20 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="w-20 mx-auto">
        {/* You can keep your SVG or replace it with your logo */}
      </div>

      <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
        Register an account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleRegister} method='POST' className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
            <div className="mt-2">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-900">Confirm Password</label>
            <div className="mt-2">
              <input
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                value={password_confirmation}
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-2 focus:outline-orange-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;