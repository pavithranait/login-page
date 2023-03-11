import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { register } from "../slice/apiSlice";
import { useDispatch } from "react-redux";
import { fetchuser } from "../slice/apiSlice";

const SignUp = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const [file, setFile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  // useEffect(() => {
  //   fetchApi();
  //   console.log(data);
  // }, [data]);
  // const fetchApi = async () => {
  //   const response = await fetch("http://127.0.0.1:3000/login");
  //   const json = await response.json();
  //   setData(json);
  //   console.log(json)
  // };
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
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleRadio = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };
const handleInputChange = (e) => {
  setFile(e.target.files)

}
  // Handling the form submission
  const handleSubmit = (e) => {
    // console.log(file)
    e.preventDefault();
    const fData = new FormData();
    fData.append('image', file);
    try {
      dispatch(fetchuser({
        data:fData
      }))
      // console.log("img", fData);
    } catch (ex) {
      console.log(ex);
    }
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      dispatch(register({
        name: name,
        email: email,
        password: password,
        gender:gender,
        phone: phone,
        image: file[0].name,
        address:address
        
      }));
      // axios.post("http://127.0.0.1:3000/profile-upload-single", fData)
      // .then(res => { // then print response status
      //     console.warn(res);
      // })
      // navigate("/signin")
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
    <div>
      <Header />
      <div className="login-form-u">
        <div>
          <h1>User Registration</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form className="form-b">
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
          <label className="input-container">Phone-No</label>
          <input
            onChange={handlePhone}
            className="input"
            value={phone}
            type="text"
          />
          <label className="input-container">Gender</label>
          <div className="radio">
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={handleRadio}
              checked={gender === "Male"}
            />{" "}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={handleRadio}
              checked={gender === "Female"}
            />{" "}
            Female
            <input
              type="radio"
              value="Other"
              name="gender"
              onChange={handleRadio}
              checked={gender === "Other"}
            />{" "}
            Other
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="text-white">Select File :</label>
              <input
                type="file"
                className="form-control"
                name="upload_file"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label className="input-container">Address</label>
          <input
            onChange={handleAddress}
            className="input"
            value={address}
            type="text"
          />
          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
