
import React, { Component } from 'react';
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dashboard container">
                <div className='row'>
                    <div className="col s12 m6">
                        <ProjectList></ProjectList>
                    </div>
                    <div className="col s12 m5 offseet-m1">
                        <Notifications></Notifications>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashbord;