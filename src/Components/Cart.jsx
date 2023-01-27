import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Fragment, useEffect, useRef, useState } from 'react'

function Cart() {
  return (
    <div className=" h-[40px] z-50 text-right">
    <Menu as="div" className="relative inline-block text-left mt-0">
      <div className='mt-2px'>
        <Menu.Button className="mt-2 inline-flex w-full justify-center rounded-md px-4 h-[20px] text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
       <div className='flex border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
       
          <div className=' flex flex-col  text-center scale-75 '>
           <p className=' text-xl text-orange-400'>0</p>
           <span className="pl-4 text-2xl flex item-center w-[60px]  ">
            {/* <ShoppingCartIcon className='text-2xl '/> */}
              <img className ="object-fit w-[60px] h-[40px]" src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png"/>
           </span>
        </div>
      
       <div className='text-sm font-bold '>Cart</div>
      </div>    
         
        </Menu.Button>
      </div>
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