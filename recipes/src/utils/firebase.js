import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCc8vgO-JUGazXJWnogxzGvYGe4yZCc1kk",
    authDomain: "my-app-ba547.firebaseapp.com",
    projectId: "my-app-ba547",
    storageBucket: "my-app-ba547.appspot.com",
    messagingSenderId: "432625977150",
    appId: "1:432625977150:web:20536cc9a71cf7c19f0e6f"
  };

  //check if not initialized yet
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;

  export const auth = firebase.auth();