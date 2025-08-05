// app/components/LoginForm.jsx


'use client';

import { useState } from "react";

const Login = () => {
    const [data, setdata] = useState({
        email:"",
        password:""
    })
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, value } = e.target;
    setdata((data)=>({
        ...data,
        [name]:value
    }))
  };



  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleSubmit}
          required
          className="outline-none mt-1 block w-full px-3 py-2 border-b-2 border-white hover:border-green-700 focus:border-blue-600 sm:text-sm"
          
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium"
        >
          Password
        </label>
        <input
          type="password"
          onChange={handleSubmit}
          id="password"
          name="password"
          value={data.password}
          required
          className="outline-none mt-1 block w-full px-3 py-2 border-b-2 border-white hover:border-green-700 focus:border-blue-600 sm:text-sm"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </form>
  );
};

export default Login;