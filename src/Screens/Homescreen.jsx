import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import banner from "../assets/banner.jpg";
import Card from '../Components/Card'
import Product from '../Components/Product';
import { collection, query, where, onSnapshot ,getFirestore } from "firebase/firestore";
import app from '../firebase';


function Homescreen({logout}) {

  const db = getFirestore(app);

  const [items, setItems] = useState([]);


 async function getdata(){
   
      onSnapshot(collection(db, "Product"),(querySnapshot) => {
  const temp = [];
  querySnapshot.forEach((doc) => {
      temp.push({id : doc.id,...doc.data()});
  });
  setItems(temp);
  });

  }


  useEffect(()=>{
    getdata();

  },[])
  return ( 
        <div className="bg-slate-200 pb-56">
           <Navbar logout={logout}/>
           <Navbar2/>
      <div className=" max-w-[110rem]  mx-auto relative">
        <img className="" src={banner} />
        <div className=" absolute bg-gradient-to-t from-slate-200 to-transparent via-slate-200/50  bottom-0 z-10 w-full h-1/3 " />
      </div>
      <div className=" relative z-50">
        <Card/>
        <div className="absolute top-25 max-w-[110rem] z-50 ab mx-auto gap-6 px-6 grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    
            {items?.map(items=><Product
            id={items?.id}
            key={items?.id}
              showName 
              showPrice 
              name={items?.name}
              price={items?.price}
              imgURL='https://m.media-amazon.com/images/I/714vSwERZUL._SL1500_.jpg'
              // slug={item.slug.current}
            />)}
        </div>
      </div>

      <div className=" mt-[480px] flex overflow-x-scroll max-w-[110rem] mx-auto overflow-y-hidden p-4 space-x-2 ">
            <Product
              showName = {false}
              showPrice ={ false}
              name="MI Phone"
              price="250$"
              imgURL="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!348x348.jpg?f=webp"
            />
      </div>
    </div>
       
  )
}

export default Homescreen