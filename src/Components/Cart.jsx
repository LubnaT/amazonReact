import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Fragment, useEffect, useRef, useState } from 'react'

function Cart() {
  return (
    <div className=" h-[40px] mt-0 z-50 text-right">
    <Menu as="div" className="relative top-0 inline-block text-left mt-2">
    
        <Menu.Button className="inline-flex w-full justify-center rounded-md px-4  text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      
          <div className='flex flex-col absolute top-0 right-2 text-center scale-75 border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
           <p className='text-xl text-orange-400'>0</p>
           <span className=" text-xl flex item-center w-[60px] ">
            {/* <ShoppingCartIcon className='text-2xl '/> */}
              <img className ="object-fit w-[40px] h-[30px]" src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png"/>
           </span>
           <div className='text-sm font-bold '>Cart</div>
      
      </div>    
         
        </Menu.Button>
     
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              
            </Menu.Item>
          
          </div>
          <Menu.Items>
         <a href={''}> 
            <div className="p-2 mt-4 font-semibold w-full items-center text-sm 
                 group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-500">
                Proceed to buy
              </div>
        </a>
          </Menu.Items>
         
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
  )
}

export default Cart