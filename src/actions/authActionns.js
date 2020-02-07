import * as type from "../constants/loginConstant";

export const signIn = (data) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
        data.email,
        data.password
      ).then(() => {
        dispatch({ type: type.LOGIN_SUCCSES});
      }).catch(err => {
        dispatch({ type: type.LOGIN_ERROR}, err);
      });
    }
  };

  
export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(function() {
            dispatch({ type: type.LOGOUT_SUCCSES});
          }).catch(function(error) {
            dispatch({ type: type.LOGOUT_ERROR}, error);
          });
    }
  };
