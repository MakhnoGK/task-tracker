import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAbO0RGgQqVlX2OMcf4IzVe3ENojbhL-FI",
  authDomain: "trackbi.firebaseapp.com",
  databaseURL: "https://trackbi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "trackbi",
  storageBucket: "trackbi.appspot.com",
  messagingSenderId: "1004138049057",
  appId: "1:1004138049057:web:61acba0c343afdaff73d60"
};

const app = initializeApp(firebaseConfig);

export default app;
