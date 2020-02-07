import ProjectDetails from "../components/projects/ProjectDetails";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const mapStateToProps = (state,oldProps) => {
    const id=oldProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
      project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection:'projects'
    }])
)(ProjectDetails)
    