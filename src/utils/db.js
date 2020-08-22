import firebase from 'firebase/app';
import 'firebase/database';
const fbConfig = {
  apiKey: 'AIzaSyDYSuC9NSZLvz5X1jUZfRPWSBifr1sJfDk',
  authDomain: 'alley-hoop.firebaseapp.com',
  databaseURL: 'https://alley-hoop.firebaseio.com',
  projectId: 'alley-hoop',
  storageBucket: 'alley-hoop.appspot.com',
  messagingSenderId: '668578237726',
  appId: '1:668578237726:web:41eeed3d9189485eac0d0f',
  measurementId: 'G-TN65WGBLQL',
};

const fb = firebase.initializeApp(fbConfig);
const db = fb.database();
export default db;
