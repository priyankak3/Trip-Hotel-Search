import 'firebase/auth';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBDSc1EygEINkggUnA7XN-tR0PDuK_XA5c",
  authDomain: "travel-d2f02.firebaseapp.com",
  projectId: "travel-d2f02",
  storageBucket: "travel-d2f02.appspot.com",
  messagingSenderId: "316803344449",
  appId: "1:316803344449:web:e4b9251e44dbbd2e2dbec0",
  measurementId: "G-YJVECS4GNV"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };