import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
const fbConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const fb = firebase.initializeApp(fbConfig);
export const db = fb.database();
export const analytics = fb.analytics();
