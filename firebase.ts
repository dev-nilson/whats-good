import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PULIC_FIREBASE_API_KEY,
  authDomain: "dev-nilson-whats-good.firebaseapp.com",
  projectId: "dev-nilson-whats-good",
  storageBucket: "dev-nilson-whats-good.appspot.com",
  messagingSenderId: process.env.NEXT_PULIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PULIC_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
