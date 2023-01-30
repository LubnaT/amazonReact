import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from '../assets/logo.jpeg';
import Cart from './Cart';

function Navbar({logout}) {
  return (
    <div className='bg-[#131921] h-[60px] flex text-white'>
    <div className='flex mx-4 items-center justify-between w-full space-x-4'>
    {/* amazonlogo  */}
        <a href="/"><img className='h-[40px] w-[200px] hover:border-2 border-white border-solid' src={Logo}/></a>
         {/* Hello address locatio */}
        <div className='font-normal flex  text-sm  whitespace-nowrap hover:border-2 border-white border-solid'>
            <LocationOnIcon className='mt-2 text-lg' />
            <div>
            <p className='text-gray-400 text-xs'>Hello </p>
            <p className='leading-3 font-bold text-sm'>Select your Address</p>
            </div>
        </div>

        {/* Input field */}
        <div className='flex h-10 w-full border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
          <button className='flex items-center bg-gray-200 border border-[#131921]
           outline-1 p-2 text-black text-sm font-thin rounded-l-lg'>
           All <ArrowDropDownIcon  fontSize='inherit'/>
          </button>
            <input className='border-y border border-[#131921] w-full'/>
           
            <button className='bg-yellow-400/90 text-3xl rounded-r-lg text-black flex
             items-center  border border-[#131921] border-r px-2'>
                <SearchIcon fontSize='inherit'/>
            </button>
        </div>
          {/* language */}
        <div className='flex items-end pt-2  border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png'
            className='h-4'/>
            <select className='bg-transparent font-bold w-10 text-xs -mb-1'>
             <option className=' uppercase text-xs bg-White text-black'>EN</option>
             <option className='font-normal text-xs bg-White text-black'>English</option>
             <option className='font-normal text-xs bg-white text-black'>Hindi</option>
            </select>
        </div>
                {/* signin  */}
        <button onClick={()=>logout()}>
        <div className='w-[130px] px-4 mt-2 h-[40px] font-medium whitespace-nowrap  border-2 border-transparent hover:cursor-pointer hover:border-white border-solid '>
            <p className=' text-gray-400 text-xs'>Hello, sign out </p>
            <div className=' flex'>
             <p className=' text-sm leading-4'>Account & List</p>
             <ArrowDropDownIcon className='text-lg' />
            </div>
            </div>
        </button>
        

        <div className='font-medium  border-2 border-transparent hover:cursor-pointer hover:border-white border-solid'>
            <p className=' text-gray-400 text-xs'>Return</p>
            <div className=' flex'>
             <p className=' text-sm leading-4 whitespace-nowrap'>& Order</p>
            
            </div>
        </div>

        {/* cart */}
        <Cart/>

    </div>

</div>
  )
}

export default Navbar