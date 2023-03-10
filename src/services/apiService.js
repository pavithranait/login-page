import baseURL from "../constants";

const getAll = () => {
  console.log(baseURL)
  return baseURL.get("/get-users");
};

const APIService = {
 
  getAll,
};

export default APIService;