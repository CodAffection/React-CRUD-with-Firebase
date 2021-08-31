import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDqY6ShKNmvMZ6SpPffjzBKc2zW6MZggzw",
    authDomain: "react-crud-262e5.firebaseapp.com",
    databaseURL: "https://react-crud-262e5.firebaseio.com",
    projectId: "react-crud-262e5",
    storageBucket: "react-crud-262e5.appspot.com",
    messagingSenderId: "766630761998",
    appId: "1:766630761998:web:eff168790dce0f0cebce5f"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();