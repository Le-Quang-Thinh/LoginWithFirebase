import CreateProject from "../components/projects/CreateProject";
import { connect } from 'react-redux'
import {createProject} from "../actions/projectActions";
import { bindActionCreators } from "redux";
const mapStateToProps = state => {
    return {
     auth : state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createProject
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
  