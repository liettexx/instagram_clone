import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4YiAmUYkTjUBWQ_3_HOnBvEkoxf5lPTs",
  authDomain: "s33-instagram-clone-81769.firebaseapp.com",
  projectId: "s33-instagram-clone-81769",
  storageBucket: "s33-instagram-clone-81769.appspot.com",
  messagingSenderId: "866902786961",
  appId: "1:866902786961:web:90668c600a9ca0be019030",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
