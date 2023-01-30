import React from 'react'
import home from '../assets/home.jpeg'
import women from '../assets/women.jpg'
import mens from '../assets/mens.jpg'
import reward from '../assets/reward.jpg'

function Card() {
  return (
    <div className='-mt-80 z-50'>
    <div className=" mx-[20px] my-[20px] grid grid-col-4 grid-row-1 h-[400px]">
      <div className="flex space-y-2 max-w-max h-[400px] gap-4 cursor-pointer drop-shadow-md">
          <div className="flex flex-col hover:bg-pink-100 bg-white rounded-md p-4 w-[320px]">
           <h1 className="text-xl font-bold">Revamp your home in style</h1>
           <a className="h-auto pt-2 hover:underline">
              <img className="h-[300px]" src={home}/> 
             <div className="h-10 mt-[15px] text-center">
              <span className="text-md text-[#007185] items-end">Explore All</span>
             </div>
           </a>
          </div>

          <div className="flex flex-col hover:bg-pink-100 bg-white rounded-md p-4 w-[320px]">
              <h1 className="text-xl font-bold">Up to 60% off | Styles for Women</h1>
              <a className="h-auto pt-2  hover:underline">
                  <img className="h-[265px]" src={women}/> 
                <div className="h-10 mt-[15px] text-center">
                 <span className="text-md text-[#007185] items-end">Explore All</span>
                </div>
              </a>
             </div>

             <div className="flex flex-col hover:bg-pink-100 bg-white rounded-md p-4 w-[310px]">
              <h1 className="text-xl font-bold">Up to 60% off | Styles for Men</h1>
              <a className="h-auto pt-2  hover:underline">
                  <img className="h-[265px]" src={mens} />
                <div className="h-10 mt-[15px] text-center">
                 <span className="text-md text-[#007185] items-end">Explore All</span>
                </div>
              </a>
             </div>

             <div className="flex flex-col hover:bg-pink-100 bg-white rounded-md p-4 w-[310px]">
              <h1 className="text-xl font-bold">Shop & Pay | Earn rewards daily</h1>
              <a className="h-auto pt-2  hover:underline">
                  <img className="h-[265px]" src={reward}/> 
                <div className="h-10 mt-[15px] text-center">
                 <span className="text-md text-[#007185] items-end">Explore All</span>
                </div>
              </a>
             </div>

      </div>
  </div>


</div>
  )
}

export default Card