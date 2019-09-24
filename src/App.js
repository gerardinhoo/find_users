import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://randomuser.me/api/?results=30");
    this.setState({ users: res.data.results, loading: false });

    // console.log(res.data.results);
  }
  render() {
    return (
      <div>
        <Navbar title="Users" icon="fas fa-users" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
