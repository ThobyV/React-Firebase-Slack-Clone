import firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "online-meetups-e955d.firebaseapp.com",
  databaseURL: "https://online-meetups-e955d.firebaseio.com",
  projectId: "online-meetups-e955d",
  storageBucket: "online-meetups-e955d.appspot.com",
  messagingSenderId: "40991229925",
  appId: "1:40991229925:web:aa91380d0cc0f026d0110c",
  measurementId: "G-PN00NWJHQY"
});

export default firebase;