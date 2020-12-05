import React, { useEffect, useState } from "react";
import * as employeesService from "../services/employeesService.js";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      let { data } = await employeesService.loadFromServer(2);
      // let { data } = await employeesService.getAllEmployees();
      setEmployees(data._embedded.employees);
    };

    getEmployees();
  }, []);

  const employeesList = employees.map((employee) => (
    <tr key={employee._links.self.href}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.description}</td>
    </tr>
  ));
  return (
    <div className="employeesList">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Description</th>
          </tr>
        </thead>
        <tbody>{employeesList}</tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
