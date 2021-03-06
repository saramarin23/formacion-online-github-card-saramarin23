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
      selectedUser: "",
      isLoading: false
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
    this.setState({ selectedUser: user, isLoading: true });
    const details = `https://api.github.com/users/${user}`;
    fetch(details)
      .then(response => response.json())
      .then(info =>
        this.setState({
          detailedUser: info,
          isLoading: false
        })
      );
  }

  render() {
    const { students, selectedUser, detailedUser, isLoading } = this.state;

    return (
      <div className="App">
        <Select
          students={students}
          selectUser={this.selectUser}
          isLoading={isLoading}
        />
        <Card
          students={students}
          selectedUser={selectedUser}
          detailedUser={detailedUser}
        />
      </div>
    );
  }
}

export default App;
