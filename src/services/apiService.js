import httpCommon from "../http-common";

const getAll = () => {
  console.log(httpCommon)
  return httpCommon.get("/get-users");
};

const APIService = {
  getAll,
};

export default APIService;