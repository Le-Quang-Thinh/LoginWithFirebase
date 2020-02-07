import * as type from "../constants/projectConstant";


export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        createdAt: new Date()
      }).then(() => {
        ({ type: type.CREATE_PROJECT,
            project });
      }).catch(err => {
        ({ type: type.CREATE_PROJECT_ERR}, err);
      });
    }
  };