import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyB0zCej93oIFrDPndu_JbEIRn3oY3qqC7c',
  authDomain: 'chat-app-19430.firebaseapp.com',
  projectId: 'chat-app-19430',
  storageBucket: 'chat-app-19430.appspot.com',
  messagingSenderId: '121161139561',
  appId: '1:121161139561:web:2a6bb3d7eb8917e7da29f8',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
