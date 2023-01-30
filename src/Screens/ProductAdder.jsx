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
  return (
    <div className='bg-gray-500 w-screen h-max'>
            <div className=''>
            <div className=' '>
                <a className='text-3xl font-semibold'> Amazon Product Form</a> <br/>
                <input placeholder='  Add Product Name'  className='border-2 w-1/2 h-10 rounded-t-lg'/>
                <div className='bg-gray-300 mx-auto w-1/2 h-10 flex text-3xl items-center'>
                    <StoreIcon fontSize='inherit' className=''/> <a className='text-sm'>Shop: 
                    <span className='w-max px-2 py-1 border border-black bg-white'>Amazon <ArrowDropDownIcon/> </span></a>

                </div>
                <div className='bg-white  w-1/2 mx-auto h-max py-2 flex  text-4xl '>
                    <AttachFileIcon fontSize='inherit' className='rotate-45'/>
                    <div className='text-sm fle'> 
                        <a className='flex justify-start'>Affiliat URL*:</a>
                        <input className='w-[40rem] rounded-md h-8 border border-black ml-'/><br/>
                        <a className='flex justify-start'>Enter your affiliat URL here</a>
                    </div><br/>
                
                </div>
                <div className='bg-white  px-2 w-1/2 mx-auto h-max py-2 flex space-x-2 text-4xl '>
                   <div>
                   <img className='w-60 h-40' src=''/>
                    <ErrorIcon/> <a className='text-lg'>Consider image rights</a><br/>
                    <a className='text-lg text-blue-500 cursor-pointer' >Set image features</a>
                   </div>
                   <div className='space-y-3 '>
                    <div>
                        <a className='text-sm flex justify-start font-semibold'>Small image URL</a>
                        <input className='rounded-lg border border-black w-[30rem] h-8'/>
                        <a className='text-sm flex justify-start'>Around 75px width</a>
                    </div>
                    <div>
                        <a className='text-sm flex justify-start font-semibold'>Medium image URL</a>
                        <input className='rounded-lg border border-black w-[30rem] h-8'/>
                        <a className='text-sm flex justify-start'>Around 150px width</a>
                    </div>
                    <div>
                        <a className='text-sm flex justify-start font-semibold'>Large image URL</a>
                        <input className='rounded-lg border border-black w-[30rem] h-8'/>
                        <a className='text-sm flex justify-start'>Around 500px width</a>
                    </div>
                   </div>
                </div>

                <div className='grid grid-cols-2 w-1/2 mx-auto py-2 bg-white px-4'>
                    <div className='flex text-5xl text-gray-500 border  border-gray-300 '>
                        <ShoppingCartIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Title:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>

                    </div>
                    <div className='flex text-5xl  border text-gray-500 border-gray-300 '>
                        <ShoppingCartIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Price:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>
                        
                    </div>
                    <div className='flex text-5xl border text-gray-500 border-gray-300 '>
                        <StarIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Offer Price:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>
                        
                    </div>
                    <div className='flex text-5xl border text-gray-500 border-gray-300 '>
                        <StarIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Rating:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>
                        
                    </div><div className='flex text-5xl text-gray-500 border border-gray-300 '>
                        <LanguageIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Total Reviews:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>
                        
                    </div>
                    <div className='flex text-5xl text-gray-500 border border-gray-300 '>
                        <LanguageIcon fontSize='inherit'/> 
                        <div className='text-lg '>
                            <a className='flex justify-start'>Country:<HelpIcon/> </a>
                            <input className='h-6 border rounded-lg border-black'/>
                        </div>
                        
                    </div>
                    <div className='flex text-5xl col-span-2 text-gray-500 border border-gray-300 '>
                     
                        <div className='text-lg px-4'>
                            <a className='flex justify-start'>Description:<HelpIcon/> </a>
                            <textarea id="message" name="message" class="w-[42rem]  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
           
                        </div>
                        
                    </div>
                    




                </div>




            </div>
            </div>

    </div>
  )
}

export default ProductAdder