
import './App.css';
import { getAuth, GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged, } from "firebase/auth";
import { getFirestore, doc, getDoc ,setDoc  } from "firebase/firestore";
import app from './firebase'
import { useEffect, useState } from 'react';
import Loginpage from './Screens/Loginpage';

function App() {

  const [user,setUser]= useState(false);



const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

useEffect(()=>{
  if (!user) return ;
  checkNewLogin();
},[user])

async function checkNewLogin(){
  const docRef = doc(db, "users", user?.uid);
  const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  await setDoc(doc(db, "users", user?.uid), user);   
}
}


async function signup(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.

    const {displayName ,email ,photoURL ,uid} = result.user ;
    setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
  }).catch((error) => {
    setUser(null)
    console.log(error)
  });

}


async function SignOut(){
 await signOut(auth).then(()=>{console.log("errr")}).catch(()=>{console.log("error")})
}

useEffect(()=>{
  onAuthStateChanged(auth, (u) => {
    if (u) {
      const {displayName ,email ,photoURL ,uid} = u ;
      setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
     
    } else {
      // User is signed out
      setUser(null)
    }
  });
},[user])
  return (
    <div className="text-8xl">
   {user ? <Homescreen/> : <Loginpage login={signup}/>} 
    </div>
  );
}

export default App;
