import React, { Component, Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import About from "./components/pages/About";

import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async(() => {
      setLoading(true)
      const res = await axios.get("https://randomuser.me/api/?results=12");
      setUsers(res.data.results)
      setLoading(false)
      console.log(res.data);
    })
  })


  // async componentDidMount() {
  //   setLoading(true)
  //   const res = await axios.get("https://randomuser.me/api/?results=12");
  //   setUsers(res.data.results)
  //   setLoading(false)
  //   console.log(res.data);
  // }

    return (
      <Router>
        <div>
          <Navbar title="Random Users Finder" icon="fas fa-users" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Users
                      loading={loading}
                      users={users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }


export default App;
