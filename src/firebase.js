import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCQ5U70Z8BBCMcqMldBPjwWmmRtnfQVTrg",
    authDomain: "crud-react-5f109.firebaseapp.com",
    databaseURL: "https://crud-react-5f109.firebaseio.com",
    projectId: "crud-react-5f109",
    storageBucket: "crud-react-5f109.appspot.com",
    messagingSenderId: "882372226328",
    appId: "1:882372226328:web:d325bfea4bdf4cb439426d"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();