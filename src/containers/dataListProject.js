import { connect } from 'react-redux'
import { compose } from "redux";
import Dashboard from "../components/dashboard/Dashboard";
import { firestoreConnect } from "react-redux-firebase";
const mapStateToProps = (state) => {
    return {
      projects: state.firestore.ordered.projects,
      auth:state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects' }
    ])
  )(Dashboard)