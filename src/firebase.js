import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging} from 'firebase/messaging'
const firebaseConfig = {
  apiKey: "AIzaSyDhN25EXLKAFumCN1WcF9XA3ktSBQUdYzA",
  authDomain: "rocketnotifica.firebaseapp.com",
  projectId: "rocketnotifica",
  storageBucket: "rocketnotifica.appspot.com",
  messagingSenderId: "534525300649",
  appId: "1:534525300649:web:e8aff6657dabf81dfc7eb8",
  measurementId: "G-E7L833SQSD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);