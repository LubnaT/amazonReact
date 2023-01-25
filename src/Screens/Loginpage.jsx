import React from 'react'

function Loginpage(props) {
  return (
    
    <div className=" h-screen max-w-max overflow-x-hidden bg-white grid grid-col-1 ">
      <div className="ml-[400px]">
        <div className=" px-10 pt-4">
        <div className=" flex items-center pt-1">
          {/* <img className=" h-14 w-14" src="" alt="LOGO of Site" /> */}
          {/* name of chat website */}
          <p className=" text-2xl font-medium text-gray-800 ">Whatsapp Login</p>
        </div>
        <div className=" pt-10">
            <p className="text-2xl font-medium text-gray-700 mb-4">Log in</p>
            <div className=" flex space-x-3 w-[250px]">
                <button onClick={()=> props.login()} className=" flex items-center space-x-1 px-4 border py-[6px] w-1/2 justify-center rounded-md">
                    <img alt="google-oauth2" className=" h-5 w-5" src="//heathmont.imgix.net/bitcasino/images/google-oauth2.svg?auto=compress,format" loading="lazy" />
                        <span className='text-xl'>Google</span>
                </button>
            </div>

        </div>
        <div className=" flex items-center space-x-2 my-2 w-[300px] ">
            <hr className=" border w-full" />
            <p className=" text-sm font-medium text-gray-600">or</p>
            <hr className=" border w-full" />

        </div>
        <div className=" flex flex-col  space-y-3 w-[300px]">
            <div className=" flex flex-col space-y-2">
                <p className=" font-light text-xl text-gray-600 ">Email</p>
                <input className=" border rounded-md h-10" />
            </div>
            <div className=" flex flex-col space-y-2">
                <p className=" font-light text-xl text-gray-600 ">Password</p>
                <input className=" border rounded-md h-10" />
            </div>            
        </div>
        <div className="mb-[60px] h-[60px] ">
            <button className=" text-xl  rounded-md p-2 font-bold  bg-fuchsia-500 text-white w-full ">
                Log in
            </button>
        </div>
        <div className=" text-purple-500 flex flex-col space-y-1">
            <p className=" text-sm font-medium cursor-pointer">Forgot Password?
            </p>
            
            <p className=" text-sm font-medium text-gray-800"> {`Don't have an account ?`} <span className=" text-sm font-medium hover:underline cursor-pointer text-purple-500">Create one</span></p>
            <p className=" leading-4 text-xs text-gray-500 pt-2">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Loginpage