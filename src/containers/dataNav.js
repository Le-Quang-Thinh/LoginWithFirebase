import Navbar from "../components/layout/Navbar";
import { connect } from "react-redux";

const mapStateToProps =(state) =>{
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
      }
}

export default connect(mapStateToProps,null)(Navbar)