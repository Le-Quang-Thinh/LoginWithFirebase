import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAYrOxLGVaO-p4K-K5J2hFI7e0NiuF_QEg",
  authDomain: "message-a9431.firebaseapp.com",
  databaseURL: "https://message-a9431.firebaseio.com",
  projectId: "message-a9431",
  storageBucket: "message-a9431.appspot.com",
  messagingSenderId: "302388487347",
  appId: "1:302388487347:web:a5cab4dfb5c6f76de1fcc6"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 