import React from "react";
import fetchUsers from "./service/users.js";
import "./App.css";

import Card from "./components/card/Card";
import Select from "./components/select/Select";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedUser: ""
    };
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    this.getUsersFromAdalab();
  }

  getUsersFromAdalab() {
    fetchUsers().then(students => this.setState({ students }));
  }

  selectUser(e) {
    const user = e.currentTarget.value;
    console.log(user);
    this.setState({ selectedUser: user });
  }

  render() {
    const { students, selectedUser } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <Select students={students} selectUser={this.selectUser} />
        <Card students={students} selectedUser={selectedUser} />
      </div>
    );
  }
}

export default App;
