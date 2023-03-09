import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Header from "./Header";
import { register } from "../slice/apiSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const navigate = useNavigate()

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
      
    fetchApi();
    console.log(data)
  }, [data]);
  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:3000/login");
    const json = await response.json();
    setData(json)
    // console.log(json)
  };
const errors = {
  uname: "invalid username",
  pass: "invalid password",
};

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setData(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } 
    
    else {
      dispatch({
        name: name,
        email : email,
        password : password
      })


      
      setError(false);

    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
<Header />
    <div className="login-form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="input-container">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="input-container">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="input-container">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
    
  );
};

export default SignUp;
