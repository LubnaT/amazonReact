
import './App.css';
import { getAuth, GoogleAuthProvider,signOut,signInWithPopup,onAuthStateChanged, } from "firebase/auth";
import { getFirestore, doc, getDoc ,setDoc  } from "firebase/firestore";
import app from './firebase'
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Loginpage from './Screens/Loginpage';
import Homescreen from './Screens/Homescreen';
import Productscreen from './Screens/Productscreen';
import ProductAdder from './Screens/ProductAdder';
import Proceed from './Screens/Proceed';

function App() {
  
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const db = getFirestore(app);


  const [user,setUser]= useState(()=>auth.currentUser);




// useEffect(()=>{
//   if (!user) return ;
//   checkNewLogin();
// },[user])

async function CheckFirstTime(){
  const docRef = doc(db, "users", user?.uid);
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
   console.log("Found")
}
else{
  await setDoc(doc(db, "users", user?.uid),
 {name : user.displayName, email : user?.email, cart : [], id : user?.uid})
 .then(()=>console.log("User created"))
 .catch((err)=>{
  console.log(err)

 })   
}
}


async function signup(){
  await signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    // This gives you a Google Access Token. You can use it to access the Google API.

    // const {displayName ,email ,photoURL ,uid} = result.user ;
    // setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
  }).catch((error) => {
    // setUser(null)
    console.log(error)
  });

}


async function SignOut(){
 await signOut(auth).then(()=>{console.log("sign out")}).catch(()=>{console.log("error")})
}

useEffect(()=>{
  onAuthStateChanged(auth, (u) => {
    setUser(null)
    if (u) {
      
    //   const {displayName ,email ,photoURL ,uid} = u ;
    //   setUser({"displayName":displayName ,"email" :email ,"photoURL" :photoURL ,"uid" :uid}) ;
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/firebase.User
     
    // } else {
      // User is signed out
      setUser(u);
      CheckFirstTime();
    }
  });
},[])


  return (
    <div className="text-8xl">
      <Routes>
          <Route path="/" element= {user ? <Homescreen logout={SignOut} user={user}/> : <Loginpage login={signup}/>} />
          <Route path="/product/:slug" element={ <Productscreen user={user}/> } />
          <Route path="/product/cart" element={ <Proceed user={user}/> } />
          <Route path="/admin/add-product" element={<ProductAdder/>} >

          </Route>

        </Routes>
   
    </div>
  );
}

export default App;
