import SignIn from "../components/auth/SignIn";
import { connect } from "react-redux";
import { signIn } from "../actions/authActionns";
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn
    },dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


