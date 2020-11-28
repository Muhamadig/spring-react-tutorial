const { default: Axios } = require("axios");

const api = "/api/employees";

const getAllEmployees = () => {
  return Axios.get(api);
};
module.exports = { getAllEmployees };
