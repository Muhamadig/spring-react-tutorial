const { default: Axios } = require("axios");
const follow = require("./follow");

const api = "/api/employees";

export const getAllEmployees = () => {
  return Axios.get(api);
};

export const loadFromServer = async (pageSize) => {
  let res = await follow(Axios, "/api", [
    { rel: "employees", params: { size: pageSize } },
  ]);
  return res;
  console.log("res", res);
  //     .then(async (employeeCollection) => {
  //       const schema = await Axios.get(employeeCollection.data._links.profile.href, {
  //         headers: { Accept: "application/schema+json" },
  //       });
  //       this.schema = schema.data;
  //       return employeeCollection;
  //     })

  //     .then((employeeCollection) => {
  //       console.log({
  //         employees: employeeCollection.data._embedded.employees,
  //         attributes: Object.keys(this.schema.properties),
  //         pageSize: pageSize,
  //         links: employeeCollection.data._links,
  //       });
  //     });
};
// module.exports = { loadFromServer, getAllEmployees };
