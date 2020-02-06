import { combineReducers } from "redux";
import CreateProject from "../components/projects/CreateProject";
import { connect } from 'react-redux'
import {createProject} from "../actions/projectActions";

const mapDispatchToProps = dispatch => {
    return {
      createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(CreateProject)
  