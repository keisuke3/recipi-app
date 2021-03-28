import firebase from 'firebase/app';
import 'firebase/auth';

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

export const signIn = async (email: string, password: string) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    alert(`ログインに成功しました: ${user}`);
  } catch (error) {
    alert(error.message);
  }
};

export const signOut = async () => {
  try {
    const user = await firebase.auth().signOut();
    alert(`サインアウトしました:  ${user}`);
  } catch (error) {
    alert(error.message);
  }
};
