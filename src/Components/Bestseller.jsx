import React from 'react'
import Lamp from '../assets/lamp.jpg'
import Sweter from '../assets/sweter.jpg'
import Couch from '../assets/couch.jpg'
import Shoes from '../assets/shoes.jpg'
import Keyboard from '../assets/keyboard.jpg'



function Bestseller() {
  return (
    <div className=" mt-[400px] h-[600px] w-[100%] bg-white flex block mx-[20px]">
    <div className="h-auto width-auto my-[5px] mx-[5px]">
         {/* <!-- heading  --> */}
      <div id="bestseller" className="h-[60px] ml-[20px]">
         <h1 className="text-start text-3xl font-bold p-4">Best Sellers</h1>
       </div>
        {/* <!-- cards  --> */}
        <div className="h-[500px] w-auto group grid grid-col-5 flex flex-row grid-row-1 ">
         <div className="flex gap-4 max-w-max h-[450px] space-y-2 drop-shadow-md">

            <div className="flex flex-col group p-4 h-[450px] max-w-max  bg-pink-100 rounded-md hover:bg-orange-100">
                <img className="h-[330px] w-[380px]" src={Lamp}/>
                <h2 className="text-lg font-semibold">Lamp</h2>
                <p className="items-center text-lg font-semibold">Rs 300.00</p>
                <div className="h-[60px] group items-center flex-col flex mt-[15px] p-2">
                <button id="addcart" className="p-2 h-[40px] w-[180px] text-lg group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-600">Add to cart</button>
                   
                </div>
            </div>

            <div className="flex flex-col group p-4 h-[450px] max-w-max  bg-pink-100 rounded-md hover:bg-orange-100">
                <img className="h-[320px] w-[380px]" src={Sweter}/>
                <h2 className="text-lg font-semibold">Sweater</h2>
                <p className="items-center text-lg font-semibold">Rs 1000.00</p>
                <div className="h-[60px] group items-center flex-col flex mt-[15px] p-4">
                <button   className="h-[40px] w-[180px]  text-lg group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-600">Add to cart</button>
                </div>
            </div>

            <div className="flex flex-col group p-4 h-[450px] max-w-max  bg-pink-100 rounded-md hover:bg-orange-100">
                <img className="h-[320px] w-[380px]" src={Couch}/>
                <h2 className="text-lg font-semibold">Luxurious Sofa</h2>
                <p className="items-center text-lg font-semibold">Rs 50000.00</p>
                <div className="h-[60px] group items-center flex-col flex mt-[15px] p-4">
                <button  className="h-[40px] w-[180px]  text-lg group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-600">Add to cart</button>
                  
                </div>
            </div>

            <div className="flex flex-col group p-4 h-[450px] max-w-max  bg-pink-100 rounded-md hover:bg-orange-100">
                <img className="h-[320px] w-[380px]" src={Shoes}/>
                <h2 className="text-lg font-semibold">Shoes</h2>
                <p className="items-center text-lg font-semibold">Rs 600.00</p>
                <div className="h-[60px] group items-center flex-col flex mt-[15px] p-4">
                <button   className="h-[40px] w-[180px]  text-lg group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-600">Add to cart</button>
                  
                </div>
            </div>

            <div className="flex flex-col group p-4 h-[450px] max-w-max  bg-pink-100 rounded-md hover:bg-orange-100">
                <img className="h-[450px] w-[380px]" src={Keyboard}/>
                <h2 className="text-lg font-semibold">Keyboard</h2>
                <p className="items-center text-lg font-semibold">Rs 600.00</p>
                <div className="h-[60px] group  items-center flex-col flex mt-[15px] p-4">
                <button  className="h-[40px] w-[180px] text-lg group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-600">Add to cart</button>
                  
                </div>
            </div>
         
         </div>
      </div>

    </div>
</div>
  )
}

export default Bestseller