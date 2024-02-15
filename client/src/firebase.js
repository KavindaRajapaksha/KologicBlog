// firebase.js
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kologicblog.firebaseapp.com",
  projectId: "kologicblog",
  storageBucket: "kologicblog.appspot.com",
  messagingSenderId: "281018866661",
  appId: "1:281018866661:web:260e72e622602c346f2d0c"
};

export const app = initializeApp(firebaseConfig);

