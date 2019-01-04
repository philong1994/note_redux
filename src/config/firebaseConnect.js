import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDnKsW0xjGNRkr7v3_9OZ3A-QTr4HV_OdU",
    authDomain: "notereact-45f0f.firebaseapp.com",
    databaseURL: "https://notereact-45f0f.firebaseio.com",
    projectId: "notereact-45f0f",
    storageBucket: "notereact-45f0f.appspot.com",
    messagingSenderId: "93954443505"
  };
  firebase.initializeApp(config)
  //export const noteData = firebase.initializeApp(config);
  export const noteData = firebase.database().ref('/noteData');

//   var data = firebase.database().ref('/noteData');
//       data.once('value').then(function(snapshot) {
//          console.log('====================================');
//          console.log(snapshot.val());
//          console.log('===================================='); 
//       });