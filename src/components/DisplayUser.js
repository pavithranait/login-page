import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
// import Update from "./Update";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteuser } from "../slice/apiSlice";
import { retrieveAPI } from "../store/actions/createActions";
import { useSelector } from "react-redux";
import { getFetch } from "../slice/apiSlice";

const DisplayUser = () => {
  const [datas, setData] = useState("");
  // console.log("get", datas);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const users = user
  // console.log("ddd", user);

  const handleUpdate = useCallback(() => {
    setData(users);
  
  }, [user]);

  useEffect(() => {
    dispatch(getFetch());
    handleUpdate()
  }, [handleUpdate]);
  const navigate = useNavigate();

  const updateHandle = (e) => {
    navigate("/update");
  };

  // const deleteHandle = (e, id) => {
  //   console.log(e.target.value);
  //   if(e.target.value){
  //     axios
  //     .delete(`http://127.0.0.1:3000/get-users/${e.target.value}`)
  //     .then(response => {
  //       // console.log(response)
  //       console.log("deleted success")

  //       // Handle response
  //     })

  //   }

  // }
  const deleteHandle = (e, id) => {
    try {
      const id = e.target.value;
      dispatch(
        deleteuser({
          id: id,
        })
      );
    } catch (err) {
      // console.log(err.message)
    }
  };
  return (
    <div>
      {/* {JSON.stringify(user)} */}
      <div>
        <Header />
      </div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
          <th>phone</th>
          <th>address</th>
          <th>gender</th>
          <th>token</th>
          <th>image</th>
          <th>status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {datas &&
          datas.api[0].data.map((user, i) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.Phone}</td>
              <td>{user.address}</td>
              <td>{user.Gender}</td>
              <td>{user.token}</td>
              <td>
                {
                  <img
                    src={require(`../image/${user.images1}`)}
                    alt="profile"
                    width="50"
                  />
                }
              </td>
              <td>{user.token_S}</td>
              <td>
                <button
                  className="btn-1"
                  value={user.id}
                  onClick={updateHandle}
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn" value={user.id} onClick={deleteHandle}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </table>
      {/* {senD? <Update value={senD}/>: ""} */}
    </div>
  );
  //
};

export default connect(null, { retrieveAPI })(DisplayUser);
