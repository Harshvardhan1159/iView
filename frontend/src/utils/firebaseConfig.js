// src/utils/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAwW6VtfTv_n50CLK6Ww4qIPewavsQVEB8",
  authDomain: "iview-fbeeb.firebaseapp.com",
  projectId: "iview-fbeeb",
  storageBucket: "iview-fbeeb.appspot.com",
  messagingSenderId: "698600379858",
  appId: "1:698600379858:web:0c33d42ca3bc67676ee40b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
