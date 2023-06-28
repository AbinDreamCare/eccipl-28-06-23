/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Carousel from '@/components/carousal/Carousal';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import ContactUs from '@/components/contactUs/ContactUs';
import Footer from '@/components/footer/Footer';
import UseMediaQuery from '@/hooks/MediaQuerry';


const index = () => {
  const words = ['Structural Engineering', 'Project Management', 'Technical Audits', 'Contract Management', 'Retrofitting & Rehabilitation', 'Turnkey Solutions'];
  const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)");

  const images = [
    '/images/car1.jpg',
    '/images/car2.jpg',
    '/images/car3.jpg',
    '/images/car4.jpg',
    '/images/car5.jpg',
    '/images/car6.jpg',
    // Add more image URLs as needed
  ];




  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };



  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [words.length]);
  return (
    <>
      <Head>
        <title>ECCIPL | Engineering Creations Consultancy (I) Pvt. Ltd. | Structural & Project Management Consultants</title>
        <meta name="description" content="Top archetectural services of India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <div className="relative h-screen w-full ">
          <Navbar />

          {/* Vertical Lines */}
          <div className="hidden md:block absolute top-0 bottom-0 left-32 w-1 z-20 bg-white opacity-30"> </div>
          <div className="hidden md:md:block absolute top-0 bottom-0 left-64 w-1 z-20 bg-white opacity-30"></div>
          <div className="hidden md:md:block absolute top-0 bottom-0 left-96 w-1 z-20 bg-white opacity-30"></div>

          {/* Horizontal Lines */}
          <div className="hidden md:md:block absolute bottom-28 left-0 right-0 h-1 z-20 bg-white opacity-30"></div>
          <div className="hidden md:md:block absolute bottom-56 left-0 right-0 h-1 z-20 bg-white opacity-30"> </div>

          {/* social media icons */}
          <div className='absolute md:p-10 z-30 bottom-20 right-5'>
            <AnimatePresence mode='wait'>
              <motion.h1
                key="logo"
                className="font-bold text-9xl"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 2 }}
                variants={pageVariants}
              >
                <AiFillInstagram className="text-white h-7 m-2 w-7" />
                <AiFillLinkedin className="text-white h-7 m-2 w-7" />
                <AiFillFacebook className="text-white h-7 m-2 w-7" />
                <AiFillYoutube className="text-white h-7 m-2 w-7" />
              </motion.h1>
            </AnimatePresence>


          </div>

          <Carousel images={images} />
          <div className='absolute top-16 left-5 md:top-40 md:left-40 font-sans  text-white'>

            <AnimatePresence mode='wait'>
              <motion.h1
                key="logo"
                className="font-bold text-8xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 2 }}
                variants={pageVariants}
              >
                ECCIPL
              </motion.h1>
              <motion.h1
                key="subheading"
                className="font-bold text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 3 }}
                variants={pageVariants}
              >
                Structural & Project Management Consultants
              </motion.h1>
            </AnimatePresence>


          </div>

          <div className='absolute bottom-96 md:bottom-60  md:left-[500px] opacity-30  text-white'>
            <div className="flex items-start ">
              <div className="text-5xl md:text-8xl font-serif font-bold  relative">
                {words.map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 0, position: 'absolute' }}
                    animate={{
                      opacity: currentWordIndex === index ? 1 : 0,
                      y: currentWordIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className=''>
                      {word}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --------portfolio----------- */}

        {/* ------above medium screen------- */}
        



        <div className='hidden md:flex w-full  h-full justify-center text-gray-600  mt-16 '>
          <div className='flex justify-center w-full'>
            <div className='relative h-screen w-6/12 '>

              <div className='md:absolute px-5 w-[300px] top-[350px] left-[35px] '>
                <h1 className='text-7xl'>Portfolio</h1>
                <p className='ml-1'>These are some of our most prestigious works done all over the country</p>
                <button className="px-4 mt-3 py-2 relative overflow-hidden">
                  <span className="md:absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500"></span>
                  <span className="relative  z-10">see more</span>
                </button>
              </div>

              <div className="md:absolute top-10 left-10 hover:scale-105 transition-transform duration-1000 ">
                <Image
                  src={"/images/port1.jpg"}
                  width={350}
                  height={300}
                  alt="CBI Headquarters, Mumbai"
                />
                <div className="md:absolute top-10 left-10 h-48 w-64 opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[170px] h-10 px-4 bg-black text-white">
                    CBI Headquarters, Mumbai
                  </div>
                </div>
              </div>

              <div className='md:absolute top-10 left-[410px] w-[200px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/port2.jpg"}
                  width={400}
                  height={700}
                  alt="Clover Hills Plaza, Pune2"
                />
                <div className="md:absolute top-10 left-410 h-full w-full opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[50px] ml-1 h-10 px-4 bg-black text-white">
                    Clover Hills Plaza, Pune
                  </div>
                </div>
              </div>

              <div className='md:absolute top-[200px] left-[410px] w-[200px] h-[500px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/port4new.jpg"}
                  width={500}
                  height={500}
                  alt="Club Mahindra Resorts, Lonavla"
                />
                <div className="md:absolute top-10 left-410 h-full w-full opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[170px]  h-16 px-4 bg-black text-white">
                    Club Mahindra Resorts, Lonavla
                  </div>
                </div>
              </div>

            </div>
            <div className='relative h-screen w-6/12 px-3 '>

              <div className='md:absolute top-[40px] left-[10px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/port7.jpg"}
                  width={250}
                  height={500}
                  alt="Four Seasons Winery, Baramati"
                />
                <div className="md:absolute top-10 left-10 h-48 w-64 opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[80px] -left-10 h-10 px-4 bg-black text-white">
                    Four Seasons Winery, Baramati
                  </div>
                </div>
              </div>
              <div className='md:absolute top-[250px] left-[280px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/port8.jpg"}
                  width={250}
                  height={700}
                  alt="Hilton Hotel, Goa"
                />
                <div className="md:absolute top-10 left-10 h-48 w-64 opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[50px] h-10 px-4 bg-black text-white">
                    Hilton Hotel, Goa
                  </div>
                </div>
              </div>
              <div className='md:absolute top-[295px] left-[10px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/port3.jpg"}
                  width={250}
                  height={700}
                  alt="Dosti Vihar, Thane"
                />
                <div className="md:absolute top-10 left-[30px] h-48 w-64 opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[40px] h-10 px-4 bg-black text-white">
                    Dosti Vihar, Thane
                  </div>
                </div>
              </div>
              <div className='md:absolute top-[455px] left-[10px] hover:scale-105 transition-transform duration-1000'>
                <Image
                  src={"/images/car5.jpg"}
                  width={500}
                  height={700}
                  alt="Dosti Vihar, Thane"
                />
                <div className="md:absolute top-10 left-10 h-48 w-96 opacity-0 hover:opacity-100 transform translate-y-2 transition-all duration-1000">
                  <div className="md:absolute top-[55px] left-[100px] w-fit h-10 px-4 bg-black text-white">
                    Dosti Vihar, Thane
                  </div>
                </div>
              </div>

              <div className='md:absolute  w-[300px] top-[80px] left-[325px]'>
                <h1 className='text-7xl'>100+</h1>
                <button className="px-4 mt-3 py-2 relative overflow-hidden">
                  <span className="md:absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500"></span>
                  <span className="relative z-10">Completed projects</span>
                </button>
              </div>
            </div>
          </div>


        </div>

        {/* --------below medium screen-------- */}

        <div className='md:hidden items-center my-10 flex justify-center px-10'>
          <div>
            <div className=''>
              <h1 className='text-7xl'>Portfolio</h1>
              <p className=''>These are some of our most prestigious works done all over the country</p>
              <button className="px-4 mt-3 py-2 bg-black text-white">
                see more
              </button>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port1.jpg"}
                width={350}
                height={300}
                alt="CBI Headquarters, Mumbai"
              />
              <div className="p-4 bg-black text-white">
                CBI Headquarters, Mumbai
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port2.jpg"}
                width={350}
                height={300}
                alt="Clover Hills Plaza, Pune"
              />
              <div className="p-4 bg-black text-white">
                Clover Hills Plaza, Pune
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port1.jpg"}
                width={350}
                height={300}
                alt="Club Mahindra Resorts, Lonavla"
              />
              <div className="p-4 bg-black text-white">
                Club Mahindra Resorts, Lonavla
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port7.jpg"}
                width={350}
                height={300}
                alt="Four Seasons Winery, Baramati"
              />
              <div className="p-4 bg-black text-white">
                Four Seasons Winery, Baramati
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port8.jpg"}
                width={350}
                height={300}
                alt="Hilton Hotel, Goa"
              />
              <div className="p-4 bg-black text-white">
                Hilton Hotel, Goa
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/port3.jpg"}
                width={350}
                height={300}
                alt="Dosti Vihar, Thane"
              />
              <div className="p-4 bg-black text-white">
                Dosti Vihar, Thane
              </div>
            </div>
            <div className="my-4">
              <Image
                src={"/images/car5.jpg"}
                width={350}
                height={300}
                alt="Dosti Vihar, Thane"
              />
              <div className="p-4 bg-black text-white">
                Dosti Vihar, Thane
              </div>
            </div>
            <div className='flex justify-center px-5 border-2 border-black'>
              <div >
                <h1 className='text-7xl'>100+</h1>
                <span className=" text-black ml-2">Completed projects</span>
              </div>
            </div>

          </div>

        </div>

        {/* --------portfolio----------- */}

        {/* --------Services----------- */}


        <div className='p-10 text-gray-700 relative '>
          <div className='absolute top-32 -left-20 text-9xl font-extrabold text-gray-700 -rotate-90 opacity-10 '><h1>ECCIPL</h1></div>

          <div className='flex justify-center w-full'>
            <div><h1 className='text-6xl text-center'>Services</h1></div>
          </div>

          <div className='hidden md:flex justify-center items-center mt-10'>
            <div className="relative my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Structural Consultancy</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full  hover:opacity-100 hover:scale-110 transition-all duration-1000">
                <Image
                  src="/images/port3.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500} />
              </div>
            </div>

            <div className="relative my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Project Management </h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:scale-110 hover:opacity-100 transition-all duration-1000">
                <Image
                  src="/images/port5.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500} />
              </div>
            </div>

            <div className="relative my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Contract Management</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:scale-110 hover:opacity-100 transition-all duration-1000">
                <Image
                  src="/images/port1.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500} />
              </div>
            </div>

            <div className="relative my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Technical Audits</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:scale-110 hover:opacity-100 transition-all duration-1000">
                <Image
                  src="/images/port2.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500} />
              </div>
            </div>

            <div className="relative my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Retrofitting & Rehabilitation</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:scale-110 hover:opacity-100 transition-all duration-1000">
                <Image
                  src="/images/port3.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="relative my-5 px-6 w-40 h-40 ">
              <div className="absolute h-full w-full inset-0 flex items-center justify-center opacity-100 hover:opacity-0">
                <div className='flex justify-center text-center'>
                  <h1 className="text-xl text-black">Turnkey Solutions</h1>
                </div>
              </div>
              <div className="absolute top-0 left-0 opacity-0 w-full h-full hover:scale-110 hover:opacity-100 transition-all duration-1000">
                <Image
                  src="/images/port5.jpg"
                  alt="Dosti Vihar, Thane"
                  className="bg-cover w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>

          </div>


          <div className='md:hidden justify-center  mt-10'>
            <div className='flex justify-center'>
              <div className=" my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Structural Consultancy</h1>
                  </div>
                </div>
              </div>

              <div className="relative my-5 px-6 w-40 h-40 ">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Project Management </h1>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-center'>
              <div className=" my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Contract Management</h1>
                  </div>
                </div>
              </div>

              <div className="relative my-5 px-6 w-40 h-40 ">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Technical Audits</h1>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-center'>
              <div className=" my-5 px-6 w-40 h-40 border-r-2 border-slate-300">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Retrofitting & Rehabilitation</h1>
                  </div>
                </div>
              </div>

              <div className="relative my-5 px-6 w-40 h-40 ">
                <div className=" h-full w-full  flex items-center justify-center opacity-100 hover:opacity-0">
                  <div className='flex justify-center text-center'>
                    <h1 className="text-xl text-black">Turnkey Solutions</h1>
                  </div>
                </div>

              </div>
            </div>





          </div>


        </div>

        {/* --------Services----------- */}



        <div id='contact' className='my-10'>
          <ContactUs />
        </div>

        <div className='w-full mt-10'>
          <h1 className='text-6xl my-10 mt-10 text-gray-700 text-center w-full '>Reach us at</h1>
          <div className='md:flex justify-evenly my-10'>
            <div className='border-2 border-gray-700 p-7'>
              {isAboveMediumScreens ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.5076779038648!2d73.82849613356018!3d18.505471656603937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf92bf2ddd55%3A0x8bbae6e039c375da!2s43%2F15%2C%20Pandurang%20Colony%2C%20Erandwane%2C%20Pune%2C%20Maharashtra%20411004!5e0!3m2!1sen!2sin!4v1686891013895!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              ) : (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.5076779038648!2d73.82849613356018!3d18.505471656603937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf92bf2ddd55%3A0x8bbae6e039c375da!2s43%2F15%2C%20Pandurang%20Colony%2C%20Erandwane%2C%20Pune%2C%20Maharashtra%20411004!5e0!3m2!1sen!2sin!4v1686891013895!5m2!1sen!2sin" width="320" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              )}
              <h1 className='text-xl font-bold mt-10'>Pune  office </h1>
              <h1>  1/2/13, second floor,</h1>
              <h1>Flat no.5, Shilpayatan apartment, </h1>
              <h1>Palande courier services lane,</h1>
              <h1>Near SNDT bridge,</h1>
              <h1>Pune - 411004</h1>
              <h1>Ph no. (020) 25462555</h1>
            </div>
            <div className='border-2 border-gray-700 p-7'>
              {isAboveMediumScreens ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.7817735061208!2d72.97327438464303!3d19.189772125231226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93821d8c6c1%3A0x7c1741771bf957d5!2sEngineering%20Creations%20Consultancy%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686891459742!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              ) : (
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d760.7817735061208!2d72.97327438464303!3d19.189772125231226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93821d8c6c1%3A0x7c1741771bf957d5!2sEngineering%20Creations%20Consultancy%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686891459742!5m2!1sen!2sin" width="320" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              )}
              <h1 className='text-xl font-bold mt-10'>Thane office </h1>
              <h1>Matru Chaya, Flat No. 301,</h1>
              <h1>Opposite Bedekar Hospital,</h1>
              <h1>Maharashi Karve Road, Naupada,</h1>
              <h1>Thane West 400602</h1>
              <h1>Tele: +91 22 2541 4479</h1>
            </div>
          </div>
        </div>

        <Footer />

      </main>

    </>
  )
}

export default index