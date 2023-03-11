import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIService from "../services/apiService";
import { ActionTypes } from "../constants";
import { FETCH_API } from "../store/actions/types";
import axios from "axios";


export const getFetch = createAsyncThunk("get-users/getFetch", async() =>{
  const res = await APIService.getAll();
  // console.log(res)
  return res.data;
 
})
// console.log("api",FETCH_API)
export const apiSlice = createSlice({
  name: "api",
  initialState :  { id: "" , name:"", email:"", password:"", gender: "", phone:"", image:"", address:"", data:[], isLoading: false },
  
  reducers: {

    fethApi: (state, action) => {

     try{
      // state = action.payload;
      const data = state.data

      axios.post(
        "http://127.0.0.1:3000/get-users",data
    
      );
      state.data.push(data)

     }catch(err){
      console.log(err)

     }

    },
    fetchuser:(state, action) => {

      try{
        console.log(action)
      state = action.payload;
      const data = {

        image : state.image
      };

        axios.post(
          "http://127.0.0.1:3000/profile-upload-single",data
      
        );

      }catch (err) {
        // console.log(err.message);
      }


      // console.log(type)
      // console.log(payload)

      // // console.log(action)
      //   // const sD = state.data.push( action.payload.data.data)
      //   // console.log("dd",sD)

      //   // console.log("dis", action);

      //   switch (type) {

      //     case FETCH_API: {
      //       console.log("dfd",payload)
      //       return payload;
        
      //     }
      //     default:
      //       return fetch;
      //   }
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
          // console.log(response);
          alert("login success")
          // console.log(response.data.token);
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
        const data =  state.id
          
        
        axios
          .delete(`http://127.0.0.1:3000/get-users/${data}`)
          .then((response) => {
            console.log(response)
            alert("user deleted successfull");
            // window.location.href = '/display'
            // window.location.reload();
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
          // console.log("con",data.name, data.id)
          axios.get(`http://127.0.0.1:3000/get-users/${data.id}`)
          console.log(data.id)
          if(data.id){
            axios
          .put(`http://127.0.0.1:3000/get-userss/${data.id}}`, data)
          .then((res) => {
            console.log(res.data);
            // navigate("/");
            window.location.href = '/display'
          })
          .catch((err) => {
            console.log(err);
          });

          }
          
    //   }
        } catch (err) {
          console.log(err.message);
        }
      },
  },
  extraReducers: {

    [getFetch.fulfilled]:(state, {payload}) =>{
        // console.log("slice", payload.data)
        return [payload.data]

    },
}
 
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


export const { deleteuser, login, register, updateuser, fetchuser, fethApi } = apiSlice.actions;
export default apiSlice.reducer;
