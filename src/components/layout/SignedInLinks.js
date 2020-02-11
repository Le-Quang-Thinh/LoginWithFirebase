import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logOut } from "../../actions/authActionns";
const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/' onClick={props.logOut}>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
        {props.avatar}
        </NavLink></li>
      </ul>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut
  },dispatch)
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
