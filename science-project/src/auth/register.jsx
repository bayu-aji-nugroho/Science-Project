// app/components/RegisterForm.jsx

'use client';
import { auth } from "@/lib/firebase/init";
import {createUserWithEmailAndPassword} from "firebase/auth"


import { useState } from "react";

const Register = () => {

    const [data, setData] = useState({
        email:"",
        password:""
    })
  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target
    setData( (i) => ({
        ...i,
        [name]:value,

    }))
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,data.email,data.password)
    
   
  }

  return (
    <form  className="space-y-4 text-white" onSubmit={handleSubmit}>
       <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium "
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full px-3 py-2 border-b-2 border-white hover:border-green-700 focus:border-blue-600 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email-register"
          className="block text-sm font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email-register"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          className=" outline-none mt-1 block w-full px-3 py-2 border-b-2 border-white hover:border-green-700 focus:border-blue-600 sm:text-sm"
         
        />
      </div>
      <div>
        <label
          htmlFor="password-register"
          className="block text-sm font-medium"
        >
          Password
        </label>
        <input
          type="password"
          id="password-register"
          name="password"
          value={data.password}
          onChange={handleChange}
          required
          className="mt-1  outline-none w-full px-3 py-2 border-b-2 border-white hover:border-green-700 focus:border-blue-600 sm:text-sm"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 "
      >
        Buat Akun
      </button>
    </form>
  );
};

export default Register;