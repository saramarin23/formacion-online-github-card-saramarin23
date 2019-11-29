import React from "react";
import fetchUsers from "./service/users.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getUsersFromAdalab();
  }

  getUsersFromAdalab() {
    fetchUsers().then(data => console.log(data));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
