import * as type from "../constants/projectConstant";


export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: type.CREATE_PROJECT,
            project });
      }).catch(err => {
        dispatch({ type: type.CREATE_PROJECT_ERR}, err);
      });
    }
  };