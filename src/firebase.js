 //Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvFykmcx4FRD8QcvebGJGGClBNbxyVfaY",
  authDomain: "clone-8a0c2.firebaseapp.com",
  projectId: "clone-8a0c2",
  storageBucket: "clone-8a0c2.appspot.com",
  messagingSenderId: "899269942168",
  appId: "1:899269942168:web:c549d97fe438c3e77b29ed",
  measurementId: "G-N2MPQK13HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export default app;