import { connect } from 'react-redux'
import Dashboard from "../components/dashboard/Dashboard";
const mapStateToProps = (state) => {
    return {
      projects: state.project.projects
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)