
import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:3000/",
  headers: {
    "Content-type": "application/json"
  }
});
export const API = "GET http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=mydb3&table=users1";

  
  