import SignUp from "../components/auth/SignUp";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signUp } from "../actions/authActionns";

const mapStateToProps =(state) =>{
      return{
          auth: state.firebase.auth
        }
  }
  

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        signUp
    },dispatch)
}

export default connect (mapStateToProps,mapDispatchToProps)(SignUp)