import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateuser } from "../slice/apiSlice";
import Header from "./Header";

const Update = () => {
  const [name, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [f, setF] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(
    (e) => {
      // console.log("id",id);
      // console.log("datas",datas);

      // axios.get(`http://127.0.0.1:3000/get-users/${id}`).then((response) => {
      //   setF(response);
      //   console.log(response);
      //   //   if (response.data.data[0].id === id) {
      //   //     console.log("idr",response.data.data[0].id)
      //   //     axios
      //   //       .put(`http://127.0.0.1:3000/get-userss/${id}}`, datas)
      //   //       .then((res) => {
      //   //         console.log(res.data);
      //   //         // navigate("/");
      //   //       })
      //   //       .catch((err) => {
      //   //         console.log(err);
      //   //       });
      //   //   }

      //   //   // Handle response
      // });
    },
    [id]
  );
  const handleAddress = (e) => {
    setAddress(e.target.value);
    // setSubmitted(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    // setSubmitted(false);
  };

  const getInput = (e) => {
    setId(e.target.value);
  };
  const updateUser = (e) => {
    e.preventDefault();
    console.log(f);
    console.log(id);
    console.log("name", name);
    //   if (f.data.data[0].id === id) {
    //     console.log("idr",f.data.data[0].id)

    dispatch(
      updateuser({
        id: id,
        name: name,
        email: email,
        password: password,
        phone: phone,
        address: address

      })
    );
    // Handle response
    // });
  };

  return (
    <div>
      <Header />
      <div className="login-form">
        {/* {datas} */}
        <div>
          <h1>Update User</h1>
        </div>
        {/* {datas && datas.map(user => <h1>{user}</h1>)} */}
        <form className="form-b">
          {/* Labels and inputs for form data */}
          <div>
            <label className="input-container">ID</label>
            <input className="input" type="text" onChange={getInput} />

            <label className="input-container">Name</label>
            <input
              className="input"
              //   id={props.value.data[0].id}
              // value={datas}
              onChange={(e) => setData(e.target.value)}
              type="name"
            />
            <label className="input-container">Email</label>
            <input
              className="input"
              //   id={props.value.data[0].id}
              // value={datas}
              onChange={(e) => setEmail(e.target.value)}
              type="name"
            />
            <label className="input-container">Password</label>
            <input
              className="input"
              //   id={props.value.data[0].id}
              // value={datas}
              onChange={(e) => setPassword(e.target.value)}
              type="name"
            />
            <label className="input-container">Address</label>
          <input
            onChange={handleAddress}
            className="input"
            value={address}
            type="text"
          />
           <label className="input-container">Phone-No</label>
          <input
            onChange={handlePhone}
            className="input"
            value={phone}
            type="text"
          />
            

            <button className="btn" type="submit" onClick={updateUser}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
