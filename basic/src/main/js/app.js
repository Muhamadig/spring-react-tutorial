import React, { Component } from "react";
import ReactDOM from "react-dom";
import client from "./client";
import EmployeeList from "./EmployeeList.jsx";

// const React = require("react");
// const ReactDOM = require("react-dom");
// const client = require("./client");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  componentDidMount() {
    client({ method: "GET", path: "/api/employees" }).done((response) => {
      this.setState({ employees: response.entity._embedded.employees });
    });
  }
  render() {
    return (
      <div>
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));
export default App;
