
import React, { useState } from "react";
import {  } from "module";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let allUsers = useApi("/users");
  console.log(allUsers);
  

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    let authUser = allUsers.find((singleUser)=> {
      return (
        singleUser.email === formData.email &&
        singleUser.password === formData.password
      );
    });
    console.log(authUser);

    if (authUser) {
      //toast message
      toast.success("Login Successful")

      //navigate Home.jsx
      Navigate("/home")

      // store token in localStorage
      localStorage.setItem("accesstoken" ,Date.now())
    }else{
      toast.error("Invalid credential")
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="font-bold text-4xl text-center text-blue-700 mb-4">
          Login
        </h1>
        <form>
          <div className="flex flex-col gap-1 mb-5">
            <label
              htmlFor="email"
              className="font-semibold text-sm text-gray-700"
            >
              Email
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-1 mb-7">
            <label
              htmlFor="password"
              className="font-semibold text-sm text-gray-700"
            >
              Password
            </label>
            <input
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>
          <button
            onClick={login}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
