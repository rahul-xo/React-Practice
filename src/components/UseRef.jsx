import React, { useRef } from "react";

const UseRef = () => {
    const UserName=useRef(null);
    const Password=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(UserName.current.value,Password.current.value);
        
    }
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans">
      {/* Form Card */}
      <div className="w-full max-w-sm p-8 space-y-6 bg-slate-800 rounded-lg shadow-xl">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white text-center">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ref={UserName}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 bg-slate-700 border border-slate-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ref={Password}
              />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UseRef;
