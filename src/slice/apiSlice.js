import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { retrieveAPI } from "../store/actions/createActions";
import { ActionTypes } from "../constants";
import { FETCH_API } from "../store/actions/types";
import axios from "axios";

const initialState =  { id: "" , name:"", email:"", password:"", gender: "", phone:"", image:"", address:"", data:[], isLoading: false }

// export const fetchU = createAsyncThunk("fetchU", async() => {
//   // const response = await fetch("http://127.0.0.1:3000/get-users");
//   // console.log(response.json())
//   // return response.json()
  
//   return await axios
//       .get("http://127.0.0.1:3000/get-users")
//       .then(response => {
//         console.log(response)}
        
//       )
// })

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchuser:(state, action) => {

      // console.log(action)

        state.data = action.payload;

        switch (action.type) {

          case FETCH_API:
            return action.payload;
      
          default:
            return state;
        }
        // console.log("action",state, "dd",action)
        // builder.addCase(fetchU.pending, (state, action) => {
        //   state.isLoading =  true
        // })
        // builder.addCase(fetchU.fulfilled, (state, action) => {
        //   state.isLoading =  false
        //   state.data = action.payload
        // })
        // builder.addCase(fetchU.rejected, (state, action) => {
        //   state.isLoading =  false
        // })
      //   state = action.payload;
      //       const data = {
      //         data: state.data 
      //       }
      //   axios
      // .get("http://127.0.0.1:3000/get-users")
      // .then(response => {
      //   console.log("ss", response)
      //   // state.data.push(response)
      //   response.data.data.map((user => user));
      //   // return response
        
      //   // console.log(state.data)
      //   // console.log(response.data)
      
      //   // Handle response
      // })


    }, 
    login: (state, action) => {
        try{
            state = action.payload;
            const data = {
                email: state.email,
                password: state.password 
            }
            axios
        .post("http://127.0.0.1:3000/login", data)
        .then((response) => {
          console.log(response);
          alert("login success")
          console.log(response.data.token);
          localStorage.setItem("key", response.data.token);
          const token = localStorage.getItem("key");
                    if(token){
                        window.location.href ='/display'
                        // console.log(res.data._token)
                    }else{
                        return false
                    }
          // window.location.href = '/display'
          // Handle response
        });
        }catch(err) {

        }
    },
    register: (state, action) => {
      try {
        state = action.payload;
        const data = {
            name: state.name,
            email: state.email,
            password : state.password,
            gender: state.gender,
            phone: state.phone,
            image: state.image,
            address:state.address
        }
        axios
            .post("http://127.0.0.1:3000/register",  data )
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
                // console.log(window)
                alert("user registered successfully!!Login into th user")
                window.location.href = '/signin'
              //   setSubmitted(true);
              //   navigate("/signin");
            }
            // Handle response
          })
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              alert(error.response.data.msg);
              window.location.href = '/signup'
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
        state = action.payload;
        const data = state.id;
        axios
          .delete(`http://127.0.0.1:3000/get-users/${data}`)
          .then((response) => {
            console.log(response)
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
          state = action.payload;
          const data = {
            id: state.id,
            name: state.name,
            email: state.email,
            password: state.password,
            phone: state.phone,
            address: state.address
          }
          console.log("con",data.name, data.id)
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
// export const fetchuse = (state = initialState, type, payload ) => {
//   console.log(payload)
//   switch (type) {
//     case ActionTypes.GET_DATA:
//       return {...state, ...payload};
//     default:
//       return state;
//   }
// }

export const { deleteuser, login, register, updateuser, fetchuser } = apiSlice.actions;
export default apiSlice.reducer;
