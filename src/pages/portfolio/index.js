import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Gallery from '@/components/gallery/Gallery'

function index() {
  return (
    <>
      <Head>
        <title>ECCIPL</title>
        <meta name="description" content="Top archetectural services of India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <div className='w-full h-full'>
          <div className='bg-black h-16 w-full'></div>
          <div className='flex justify-center'>
          <h1 className='text-gray-700 text-6xl  font-thin w-[70%] text-center my-6'>Places across the globe where we established our name</h1>

          </div>
          <div className='flex justify-center'>
            <div className='w-4/12 mx-5'>
              <Image
                height={600}
                width={800}
                className="object-cover w-full h-full rounded-lg"
                src='/images/indiaWork.png'
                alt="logo"
              />
            </div>
            <div className='w-4/12 mx-5'>
              <Image
                height={600}
                width={800}
                className="object-cover w-full h-full rounded-lg"
                src='/images/africaWork.png'
                alt="logo"
              />
            </div>
          </div>
        </div>
        <Gallery/>
        <Footer/>
      </main>
    </>
  )
}

export default index