import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth }  from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsG0nUxppPUXJmTuUW8uus54CJy8ZcIok",
  authDomain: "paroquia-news.firebaseapp.com",
  projectId: "paroquia-news",
  storageBucket: "paroquia-news.appspot.com",
  messagingSenderId: "180685910155",
  appId: "1:180685910155:web:c6ae35b0a3f9c54d2f248e",
  measurementId: "G-F4GZS4MSS2"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};
