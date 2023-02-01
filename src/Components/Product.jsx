import React from 'react'

function Product({imgURL ,id , name , price ,showPrice ,showName,slug, ...props} ) {

    function truncate(description, n){
        return description?.length > n ? description.substr(0,n)+"..." : description;
    
      }
  return (
    <div className=' bg-white justify-center flex flex-col py-2 rounded-xl'>
        
    <a  href={`/product/${id}`}>
       <img className='max-h-72 object-cover' src={imgURL} alt={name} />
       {showName && <p className=' text-xl font-bold px-4 border-t'>{truncate(name,15)}</p>}
       {showPrice && <p className=' text-lg px-4 font-semibold text-gray-600'>Price : $ {price}</p>}
    </a>
  
    {/* <span className=" flex justify-center text-center">
      {/* <div className="p-2 mt-4 font-semibold w-full items-center text-sm 
       group-hover:gradient-to-r from-yellow-400 to-pink-400 bg-yellow-500">
        Add to cart
      </div> */}
    {/* </span>  */}
    
   
</div>
  )
}

export default Product