import React, { Component } from "react";

const EmployeeList = ({ employees }) => {
  const getEmployeeId = (employee) => {
    let href = employee._links.self.href;
    let tokens = href.split("/");
    return tokens[tokens.length - 1];
  };
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Job Description</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <tr key={getEmployeeId(employee)}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeList;
