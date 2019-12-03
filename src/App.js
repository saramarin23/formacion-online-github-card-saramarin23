import React from "react";
import fetchUsers from "./service/users.js";
import "./App.css";

import Card from "./components/Card";
import Select from "./components/Select";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.getUsersFromAdalab();
  }

  getUsersFromAdalab() {
    fetchUsers().then(students => this.setState({ students }));
  }

  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <Select students={students} />
        <Card />
      </div>
    );
  }
}

export default App;
