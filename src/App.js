import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path ='/' component={Dashboard} />
            <Route path ='/project/:id' component={ProjectDetails} />
            <Route path ='/singin' component={SignIn} />
            <Route path ='/singup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
