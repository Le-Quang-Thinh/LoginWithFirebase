import {LOGIN_ERROR,LOGIN_SUCCSES,LOGOUT_ERROR,LOGOUT_SUCCSES} from "../constants/loginConstant";
const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case LOGIN_SUCCSES:
      console.log('login success');
      return {
        authError: null
      }
    case LOGOUT_ERROR:
        console.log('login LOGOUT_ERROR');
        return state;
    case LOGOUT_SUCCSES:
      console.log('login LOGOUT_SUCCSES');
      return state;
    default:
      return state
  }
};

export default authReducer;