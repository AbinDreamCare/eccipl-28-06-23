/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { ImArrowDown } from 'react-icons/im'
import Navbar from '../../components/navbar/Navbar'
import Image from 'next/image'
import Footer from '@/components/footer/Footer';

function index() {

  const worksData = [{ name: 'Hotels', para: 'It includes Hotel for Taj Vivanta at Udaipur,, Sayaji Hotel At Pune, Rooming acre club at  Mumbai, BGR hotel at Hyderabad, Hilton Hotel at Goa, Hotel for Marasa, Hospitality at  Tirupati, Bodhgaya and Rajkot, Mall at Raipur , Club Mahindra Resorts at Binsar, Kumbhalgarh,  Puducherry, Lonavala etc. , Marriot at Kigali, Rwanda, Olesereni hotel in Nairobi', image: '/images/hotels1.png' },
  { name: 'Hospitals', para: 'It includes Ruby hall hospital at Wonwori, Hinjewadi, Cancer hospital at Camp Pune, Linac bunker at Pune, cancer Hospital at Nagpur, Hospital at Dolvi, Prescon Hospital at Jodhpur, etc.', image: '/images/hospital.png' },
  { name: 'IT Campuses', para: 'IT Campus for Pune, Thane Mint for India Bulls and IT campuses in Zensar are some of the major IT campuses and like structures build by our company.', image: '/images/institution.png' },
  { name: 'Educational Institutions', para: 'Christ University at Lavasa, Dastur school new building and repair works at Pune, Themigrant Nursing School at Pune, Datta Shirol College of engineering at Kolhapur, SR International School at Warangal, Calorex Public School at Mundra, Gurukul at Lonavala, Barnes Public School at Deolali, etc', image: '/images/school.png' },
  { name: 'Special Projects', para: 'Auditorium at PCMC, Pune, Kashinath Ghanekar Auditorium for Thane Municipal Corporation, Planitarium and balnagari at Pune, Aircraft Hangar for Raymond at Mumbai.', image: '/images/planitorium.png' },
  { name: 'Commercial Buildings', para: 'Clover Mall at Pune, CBI Head Quarters at Mumbai, etc, Office building at Sunola, Africa, Mount Meru Petroleum at Zambia, Mount Meru at Lusaka, Three bee, etc', image: '/images/africa.png' },
  { name: 'Industrial Buildings', para: 'Industrial plants for Raymond at Vapi, Yawatmal, Thane, industrial plants for Parle Agro at Uttarkhand, Varanasi, Bhopal, Mysuru, Khurda, Ghaziabad, etc. Chemical Plant at Nigeria, Erling Klinger Automative at ranjagaon, Datwyler pharmaceutical industry at Shirwal, Wam India at Shahpur.', image: '/images/airport.png' },
  { name: 'Residential Buildings', para: 'Residential Buildings ranging from 20 to 30 story at Thane, Mumbai, Pune for Damji Shamji Group, Dosti Vihar Towers, Clover Group, Maitri Group, Olympeo Infrastructure, Hydepark, etc.', image: '/images/residential.png' },
  { name: 'Peer Review/Proof Checking', para: 'Structural Audit and checking along with retrofitting scheme for the insustrial building at Bangalore.', image: '/images/audit.png' },

  ]

  const words = [{ heading: 'Our Mission', subHead: 'To help the client achieve their business objectives by providing innovative and best in class consulting solutions and services.' },
  { heading: 'Our Vision', subHead: 'To help the client achieve their business objectives by providing innovative and best in class consulting solutions and services.' },
  { heading: 'Our Values', subHead: 'Integrity, excellence, respect for the individual, and promoting an environment of learning and sharing and high regards to quality and timeliness of deliverables.' },];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [words.length])
  return (
    <>
      <Head>
        <title>ECCIPL</title>
        <meta name="description" content="Top archetectural services of India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=' text-gray-600 h-full w-full '>
          <Navbar />
          <div className=' h-screen aboutPage  bg-cover bg-center p-10 text-white '>
            <div className='mt-10 relative flex justify-center'>
              <div className='p-5 md:p-10 w-full flex justify-center'>
                <div>
                  <h1 className=' font-bold text-5xl md:text-9xl md:py-3 text-center'>ECCIPL</h1>
                  <h1 className='text-lg font-bold text-center'>Engineering Creations Consultancy (I) Pvt. Ltd.</h1>
                  <h1 className='text-sm text-center '>Year of establishment 1993</h1>

                  <div className='md:hidden my-4'>
                  {words.map((word, index) => (
                    <div key={index} className=''>
                    <h1 className='text-white text-center z-20 text-3xl font-bold relative'>{word.heading}</h1>
                    <h1 className='text-white text-center z-20 text-sm font-sans md:w-[600px] md:mt-5 relative'>{word.subHead}</h1>
                    </div>
                    ))}
                  </div>
                </div>
                <div className='hidden md:flex justify-center w-full'>
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
                      <div className='mt-12 relative top-48 px-10'>
                        <div className='absolute top-0 left-0 bg-black opacity-30 h-full  md:w-full z-10'></div>
                        <h1 className='text-white text-center z-20 text-7xl font-bold relative'>{word.heading}</h1>
                        <h1 className='text-white text-center z-20 text-lg font-sans md:w-[600px] mt-5 relative'>{word.subHead}</h1>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-center '>

              <div className='text-gray-700 w-10/12 mt-12'>
                <h1 className='text-xl mt-5 w-full text-justify'>This organization started its operations in 1993 and there onwards has been evolved
                  with a specific purpose of providing our clients with a sound and reliable structure
                  through our continuously monitored and engineered professional approach. Backed by
                  a highly talented, dedicated and experienced team, it is our sincere endeavor to
                  deliver the consulting services within the given framework of time and constraints.

                </h1>
                <h1 className='text-xl mt-5 w-full text-justify'>Needless to say that in today’s climate of competitive market, technical competency and
                  stringent quality control are the key to inspire success and if you are seeking these
                  virtues, we assure you that we are in for a meaningful and beneficial relationship.</h1>
              </div>
            </div>

            <div className='flex justify-center mt-12'>
              <div className='w-10/12 flex justify-center'>
                <Image
                  height={600}
                  width={800}
                  className="object-cover w-full h-full rounded-lg"
                  src='/images/aboutH.jpg'
                  alt="logo"
                />
              </div>
            </div>
          </div>


          <div className='hidden md:block w-full h-full  my-16'>
            <div>
              <h1 className='text-center text-6xl text-gray-700 font-bold mb-3'>Organization Structure</h1>
            </div>
            <div className='w-full flex justify-center text-white '>
              <div className='w-6/12 my-6  py-3 bg-gray-700  flex items-center justify-center '>
                <h1 className='text-center text-4xl font-bold'>ECCIPL</h1>
              </div>
            </div>

            <div className='text-black flex justify-center'><ImArrowDown className='' /></div>

            <div className='w-full flex justify-center text-white '>
              <div className='w-6/12 my-6  py-3 bg-gray-700  flex items-center justify-center '>
                <h1 className='text-center text-4xl font-bold'>Managing Director</h1>
              </div>
            </div>
            <div className='flex justify-center mb-8'>
              <div className='flex justify-between w-6/12'>
                <div className='text-black flex justify-center'><ImArrowDown className='' /></div>
                <div className='text-black flex justify-center'><ImArrowDown className='' /></div>
                <div className='text-black flex justify-center'><ImArrowDown className='' /></div>
                <div className='text-black flex justify-center'><ImArrowDown className='' /></div>

              </div>
            </div>
            <div className="flex justify-center  md:px-0 w-full gap-2 overflow-x-auto">
              <div>
                <div className="border-gray-700 border-2 p-2 shadow-2xl"><h1>Project Management Director</h1></div>
                <div className="bg-gray-700 text-center text-white p-2"><h1>PMC Sr. Civil Engineers</h1><h1>PMC Jr. Civil Engineers</h1></div>
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="border-gray-700 border-2 p-2 shadow-2xl"><h1>Structure Design Director</h1></div>
                  <div className="bg-gray-700 text-center text-white p-2"><h1>Sr Str Design Engineers</h1><h1>Jr Str Design Engineers</h1><h1>Str Civil Draftsman</h1></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="border-gray-700 border-2 p-3 shadow-2xl"><h1>Contract Management Director</h1></div>
                  <div className="bg-gray-700 text-center text-white p-2"><h1>Sr QS Engineers</h1><h1>Jr QS Engineers</h1></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <div className="border-gray-700 border-2 p-3 shadow-2xl"><h1>Admin & Accounts Head</h1></div>
                  <div className="bg-gray-700 text-center text-white p-2"><h1>Sr Accountant</h1><h1>Admin Assistants</h1></div>
                </div>
              </div>
            </div>

          </div>



          <div className='w-full text-gray-700 my-10'>
            <div className='w-full'>
              <h1 className='w-full text-7xl font-bold text-center my-10'>Expertise & Experience</h1>
            </div>

            <div className=' md:grid md:grid-cols-2 gap-16 mx-10 mt-10'>
              {worksData.map((data, i) => (
                <div key={i} className='md:relative md:flex justify-around rounded-xl px-4  md:hover:scale-105 transition-all duration-500 '>
                  <div className=' md:h-80 opacity-100 md:hover:opacity-0 transition-all duration-500 z-10 md:hover:z-0'>
                    <h1 className='text-3xl font-bold '>{data.name}</h1>
                    <p className='w-10/12 mt-5 text-justify'>{data.para}</p>

                  </div>
                  <div className='hidden md:block absolute top-0 left-0 z-0 hover:z-10 opacity-0 hover:opacity-100  transform duration-500'>
                    <Image
                      height={200}
                      width={500}
                      className="object-cover bg-cover w-full h-80 rounded-lg"
                      src={data.image}
                      alt="logo"
                    />
                  </div>
                </div>
              ))}
            </div>





          </div>




        </div>

        <Footer />
      </main>
    </>
  )
}

export default index