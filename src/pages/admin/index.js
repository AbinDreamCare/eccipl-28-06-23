import { useRouter } from 'next/router';
import React from 'react'
import Cookies from 'js-cookie';

function Index() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("adminToken");
    router.push("/login");
  };
  return (
    <div className='container relative w-full h-full  text-gray-700 '>
      <div className='w-full h-16 bg-gradient-to-b flex justify-center items-center from-gray-700 to-black'>
      <h1 className=" text-white font-sans text-xl">
            Engineering Creations Consultancy (I) Pvt. Ltd.
          </h1>
      </div>
      <div className='relative flex justify-around'>
        <div className='w-3/12 absolute left-0 -top-14 flex justify-center items-center  h-screen  text-white'>
          <div className='py-10  text-center w-[80%] rounded-3xl bg-gradient-to-b from-gray-700 to-black'>
            <div className='cursor-pointer text-2xl font-thin  mb-3 flex justify-center'><h1 className='w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700'>Dashboard</h1></div>
            <div className='cursor-pointer text-2xl font-thin mb-3  flex justify-center'><h1 className='w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700'>Portfolio</h1></div>
            <div onClick={handleLogout} className='cursor-pointer text-2xl font-thin mb-3  flex justify-center'><h1 className='w-[70%] rounded-3xl py-2 hover:scale-105 transition-all duration-300 bg-white  ring-2 ring-gray-700 shadow-2xl text-gray-700'>Logout</h1></div>
          </div>
        </div>
        <div className='w-8/12'>

        </div>
      </div>
    </div>
  )
}

export default Index