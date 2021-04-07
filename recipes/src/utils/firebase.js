import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAWqesyOqH2l0dDSUdZhqmdft3ZKsb6FAI",
    authDomain: "recipes-666.firebaseapp.com",
    projectId: "recipes-666",
    storageBucket: "recipes-666.appspot.com",
    messagingSenderId: "1048274752952",
    appId: "1:1048274752952:web:3f4a38210c69cdcde06b4d",
    measurementId: "G-C5LREM2C6X"
  };

  //check if not initialized yet
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

  export const auth = firebase.auth();