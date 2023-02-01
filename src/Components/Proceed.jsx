import React, { useState } from 'react'
import app from '../firebase';
import {doc, getDoc, getFirestore  } from "firebase/firestore";
import { useEffect } from 'react';

function Proceed({user}) {
    const db = getFirestore(app);
    const [uinfo,setUinfo] = useState(null);

    async function getUserInfo(){
        const docRef = doc(db, "users", user?.uid);
        const docSnap = await getDoc(docRef);
         console.log(docSnap.data())
          setUinfo(docSnap.data());
    }

        useEffect(()=>{
                getUserInfo()
            },[])
  return (
    <div>Proceed</div>
  )
}

export default Proceed