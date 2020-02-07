import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const {projects,auth}=this.props;
    if(!auth.uid) 
      return( 
        <Redirect to='/signin' />
      )
    else
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects}  />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      )
  }
}


export default Dashboard
