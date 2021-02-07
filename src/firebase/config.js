 import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDgbBfC98PauBysnPvy97NySKQGlKzc-Is",
    authDomain: "fire-3fce4.firebaseapp.com",
    projectId: "fire-3fce4",
    storageBucket: "fire-3fce4.appspot.com",
    messagingSenderId: "223988785322",
    appId: "1:223988785322:web:537d125487125472e230d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFirestore=firebase.firestore();
  const timeStamp=firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timeStamp} 