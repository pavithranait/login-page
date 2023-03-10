// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import { API } from "../constants";

// const SignIn = () => {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const [data, setData] = useState("");

//     useEffect(() => {

//       fetchApi();
//       console.log(data)
//     }, [data]);
//     const fetchApi = async () => {
//       const response = await fetch("http://127.0.0.1:3000/login");
//       const json = await response.json();
//       setData(json)
//       console.log(json)
//     };
//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password",
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();
//     console.log(data)

//     const { email, pass } = data[0];

//     // Find user login info
//     const userData = data[0].find((user) => user.email === email.value && user.password !== pass.value);

//     // Compare user info
//     if (userData) {
//       if (userData) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form

//   return (
//     <>
//       <Header />
//       <div className="app">
//         <div className="login-form">
//           <div className="title">Sign In</div>
//           <div className="form">
//             <form onSubmit={handleSubmit}>
//               <div className="input-container">
//                 <label>Username </label>
//                 <input type="text" name="uname" required />
//                 {renderErrorMessage("uname")}
//               </div>
//               <div className="input-container">
//                 <label>Password </label>
//                 <input type="password" name="pass" required />
//                 {renderErrorMessage("pass")}
//               </div>
//               <div className="button-container">
//                 <input type="submit" />
//               </div>
//             </form>
//           </div>
//           {isSubmitted ? (
//             <div>User is successfully logged in</div>
//           ) : (
//             "renderForm"
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { login } from "../slice/apiSlice";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [datas, setData] = useState("");
  const [password, setPassword] = useState("");
  const controller = new AbortController();
  const { signal } = controller;
  const dispatch = useDispatch()
  

  // useEffect(() => {
      
  //   fetchApi();
  //   // console.log(data)
  // }, []);
  // const fetchApi = () => {
  //   dispatch(fetchApi({
  //     id : datas,
  //   }))
  // }
  // // };
  // setTimeout(() => controller.abort(), 1000);
  const handleSubmit = (e) => {
    // Prevent the default submit and page reload

    e.preventDefault();
    if(!email && !password) {
      alert("no user found");
      navigate("/signin")

    }
        dispatch(login({
          email : email,
          password : password
        }))
        
    setEmail("");
    setPassword("")
    // Handle validations
    
  };

 
  return (
    <div >
      <div>
        <Header />
      </div>
      <div className="login-form">
      <form
        action="/dashboard"
        id="login"
        method="post"
        onSubmit={handleSubmit}
        className="login-form"
      >
        <h1>Login</h1>
        <label className="input-container">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="input-container">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className="btn" />
      </form>

      </div>
      
    </div>
  );
}

export default SignIn;
