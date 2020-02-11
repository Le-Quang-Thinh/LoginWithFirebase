import {LOGIN_ERROR,LOGIN_SUCCSES,LOGOUT_ERROR,LOGOUT_SUCCSES,SIGNUP_SUCCESS,SIGNUP_ERROR} from "../constants/loginConstant";
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
    case SIGNUP_ERROR:
        console.log('login LOGOUT_ERROR');
        return {...state,
          authError:null
        };
    case SIGNUP_SUCCESS:
      console.log('login LOGOUT_SUCCSES');
      return {...state,
      authError:action.error.message};
    default:
      return state
  }
};

export default authReducer;