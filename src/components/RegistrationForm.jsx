import React, { useState } from 'react';

function RegistrationForm() {
    const [formData,setformData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        const {value,name}=e.target;
        setformData((prev)=> ({...prev,[name]:value})) 
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);
    }
  return (
    // Main container to center the form
    <div className="bg-gray-900 min-h-screen flex items-center justify-center font-sans">
      
      {/* Form Card */}
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>
        
        <form className="space-y-6"  onSubmit={handleSubmit}>
          {/* First Name & Last Name in a row */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="w-full">
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.firstname}
              />
            </div>
            <div className="w-full mt-4 sm:mt-0">
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                value={formData.lastname}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.email}

            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.password}

            />
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
