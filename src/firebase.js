 import firebase from 'firebase/app';
 import 'firebase/messaging';
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCK118kPu3tPHu_QLdgCBtyYZQJdN51-wg",
  authDomain: "quiz-pwa-7a.firebaseapp.com",
  projectId: "quiz-pwa-7a",
  storageBucket: "quiz-pwa-7a.appspot.com",
  messagingSenderId: "402008526146",
  appId: "1:402008526146:web:3906442fd5b05914ca8cdb"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;