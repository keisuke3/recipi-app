import firebase from 'firebase';

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDCE6jiDQO3pv2j1fvwVPNGLqkebFJom24',
    authDomain: 'recipi-app-2bf39.firebaseapp.com',
    databaseURL: 'https://recipi-app-2bf39.firebaseio.com',
    projectId: 'recipi-app-2bf39',
    storageBucket: 'recipi-app-2bf39.appspot.com',
    messagingSenderId: '525074748702',
    appId: '1:525074748702:web:67a91fbeef9d833b14650f',
    measurementId: 'G-ZKEY8N70H3',
  };

  firebase.initializeApp(firebaseConfig);

  const isEmulating = window.location.hostname === 'localhost';
  if (isEmulating) {
    firebase.auth().useEmulator('http://localhost:9099');
    firebase.firestore().useEmulator('localhost', 8080);
  }
};
