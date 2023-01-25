/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0W2chM-ne1ncc-BwzgOhTquBM6gFdkUA",
  authDomain: "whatsapp-clone-845f8.firebaseapp.com",
  projectId: "whatsapp-clone-845f8",
  storageBucket: "whatsapp-clone-845f8.appspot.com",
  messagingSenderId: "753954718931",
  appId: "1:753954718931:web:081c5ef8208c78f5198026",
  measurementId: "G-246TG200N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export default app;