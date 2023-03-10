import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    value: {
      id: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      image: "",
      address: "",
    },
  },
  reducers: {
    fetchuser: (state, action) => {
      try {
        state.value = action.payload;
        axios.get("http://127.0.0.1:3000/get-users").then((response) => {
          // console.log(response)
          // console.log(response.data)
          state.value.id = response.data.data;

          // Handle response
        });
      } catch {}
    },
    login: (state, action) => {
      try {
        state = action.payload;
        const data = {
          email: state.email,
          password: state.password,
        };
        axios.post("http://127.0.0.1:3000/login", data).then((response) => {
          console.log(response);
          alert("login success");
          console.log(response.data.token);
          localStorage.setItem("key", response.data.token);
          const token = localStorage.getItem("key");
          if (token) {
            window.location.href = "/display";
            // console.log(res.data._token)
          } else {
            return false;
          }
          // window.location.href = '/display'
          // Handle response
        });
      } catch (err) {}
    },
    register: (state, action) => {
      try {
        state.value = action.payload;
        const data = {
          name: state.value.name,
          email: state.value.email,
          password: state.value.password,
          gender: state.value.gender,
          phone: state.value.phone,
          image: state.value.image,
          address: state.value.address,
        };
        axios
          .post("http://127.0.0.1:3000/register", data)
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              // console.log(window)
              alert("user registered successfully!!Login into th user");
              window.location.href = "/signin";
              //   setSubmitted(true);
              //   navigate("/signin");
            }
            // Handle response
          })
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              alert(error.response.data.msg);
              window.location.href = "/signup";
              //   setSubmitted(false);
              //   navigate("/signup")

              // console.log(error.response.status);
              // console.log(error.response.headers);
            }
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    deleteuser: (state, action) => {
      try {
        state.value = action.payload;
        const data = state.value.id;
        axios
          .delete(`http://127.0.0.1:3000/get-users/${data}`)
          .then((response) => {
            console.log(response);
            alert("user deleted successfull");
            window.location.reload();

            // Handle response
          });
      } catch (err) {
        console.log(err.message);
      }
    },
    updateuser: (state, action) => {
      try {
        state.value = action.payload;
        const data = {
          id: state.value.id,
          name: state.value.name,
          email: state.value.email,
          password: state.value.password,
          phone: state.value.phone,
          address: state.value.address,
        };
        console.log("con", data.name, data.id);
        axios
          .put(`http://127.0.0.1:3000/get-userss/${data.id}}`, data)
          .then((res) => {
            console.log(res.data);
            // navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
        //   }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});

export const { deleteuser, login, register, updateuser } = apiSlice.actions;
export default apiSlice.reducer;
