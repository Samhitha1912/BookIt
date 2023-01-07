import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDdgXiF_U3BCkNv20LiUJ6Ekow4T5-n3_Q",
    authDomain: "bookonthego-29f0e.firebaseapp.com",
    databaseURL: "https://bookonthego-29f0e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookonthego-29f0e",
    storageBucket: "bookonthego-29f0e.appspot.com",
    messagingSenderId: "161785678223",
    appId: "1:161785678223:web:42c1a1d0f24d59c89123fa",
    measurementId: "G-W9JPVJQHVN"
  };

  const app=getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore =getFirestore(app);
  const storage=getStorage(app);

  export {app, firestore, storage};