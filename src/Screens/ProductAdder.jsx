import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ErrorIcon from '@mui/icons-material/Error';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import HelpIcon from '@mui/icons-material/Help';
import StarIcon from '@mui/icons-material/Star';
import { Global } from '@emotion/react';

function ProductAdder() {
    
    function AddProduct(){

    }
  return (
    <div className=' w-screen h-max'>
            <div className=''>
            <a className='text-3xl mx-[550px] font-semibold'> Amazon Product Adding Form</a> <br/>
            <div className=' '>
               
               
                <div className='bg-gray-300 mt-20 border-black border-2 border-solid mx-auto w-1/2 h-10 flex text-3xl items-center'>
                    <StoreIcon fontSize='inherit' className=''/> <a className='text-sm'>Shop:  
                    <span className='w-max ml-2 px-2 py-1 border border-black bg-white'>  Amazon </span></a>

                </div>
                <div className='bg-white  border-black border-2 border-solid w-1/2 mx-auto h-max py-2 flex text-4xl '>
                    <AttachFileIcon fontSize='inherit' className='rotate-45'/>
                    <div className='text-sm fle'> 
                        <a className='flex justify-start'>Affiliat URL*:</a>
                        <input className='w-[40rem] text-sm rounded-md h-8 border border-black ml-'/><br/>
                        <a className='flex justify-start'>Enter your affiliat URL here</a>
                    </div><br/>
                
                </div>
                <div className='bg-white  border-black border-2 border-solid px-2 w-1/2 mx-auto h-max py-2 flex space-x-2 text-4xl '>
                   <div>
                   <img className='w-60 h-40' src=''/>
                   </div>
                  
                    <div className='mt-10'>
                        <a className='text-sm flex justify-start font-semibold'>Main Image URL</a>
                        <input className='rounded-lg text-sm border border-black w-[30rem] h-8'/>
                    </div>
                    </div>

                 <div className='grid grid-cols-2 w-1/2 mx-auto py-2 gap-2  border-black border-2 border-solid bg-white px-4'>
                    <div className='flex text-5xl p-2 text-gray-500 border  border-gray-300 '>
                        <ShoppingCartIcon fontSize='inherit'/> 
                        <div className='text-lg'>
                            <a className='flex justify-start'>Title:<HelpIcon/> </a>
                            <input className='h-8 w-72  text-sm border rounded-lg border-black'/>
                        </div>
                    </div>
                      {/* Price */}
                    <div className='flex text-5xl p-2 border text-gray-500 border-gray-300 '>
                        <ShoppingCartIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Price:<HelpIcon/> </a>
                            <input className='h-8 w-72 text-sm border rounded-lg border-black'/>
                        </div>
                    </div>
                       {/* Offer Price */}
                    <div className='flex text-5xl p-2 border text-gray-500 border-gray-300 '>
                        <StarIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Offer Price:<HelpIcon/> </a>
                            <input className='h-8  w-72 border text-sm rounded-lg border-black'/>
                        </div>
                    </div>
                     {/* Rating */}
                    <div className='flex text-5xl p-2 border text-gray-500 border-gray-300 '>
                        {/* <StarIcon fontSize='inherit'/>  */}
                        <div className='text-lg '>
                            <a className='flex justify-start'>Seller:<HelpIcon/> </a>
                            <input className='h-8  w-72 text-sm border rounded-lg border-black'/>
                        </div>
                    </div>
                      {/* reviews */}
                    <div className='flex text-5xl p-2 text-gray-500 border border-gray-300 '>
                        <LanguageIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Email:<HelpIcon/> </a>
                            <input className='h-8 w-72 text-sm border rounded-lg border-black'/>
                        </div>
                    </div>
                    {/* country */}
                    <div className='flex text-5xl p-2 text-gray-500 border border-gray-300 '>
                        {/* <LanguageIcon fontSize='inherit'/>  */}
                        <div className='text-lg '>
                            <a className='flex justify-start'>Category:<HelpIcon/> </a>
                            <input className='h-8 w-72 text-sm  border rounded-lg border-black'/>
                        </div>
                    </div>
                    {/* description */}
                    <div className='flex text-5xl p-2 col-span-2 text-gray-500 border border-gray-300 '>
                     
                        <div className='text-lg px-4'>
                            <a className='flex justify-start'>Description:<HelpIcon/> </a>
                            <textarea id="message" name="message" className="w-[42rem]  text-sm  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
           
                        </div>
                    </div>
                    
                    {/* button */}
                    <div className=' bg-purple-400 text-base font-semibold ml-[250px] text-center my-[20px] rounded-lg p-2'>
                        <button className=''>Publish</button>
                    </div>

                </div>

            </div>
            </div>

    </div>
  )
}

export default ProductAdder