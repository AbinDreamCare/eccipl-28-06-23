import { FaWindowClose } from "react-icons/fa";
import {
  BsFillArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

const images = [
  { hq: '/hq/ole-sereni.jpg', path: "/hq/ole-sereni.jpg", title: "Ole Sereni Hotel At Nairobi" },
  { hq: "/hq/hotel.jpg", path: "/images/car4.jpg", title: "Hotel at Tirupati" },
  { hq: "/images/car6.jpg", path: "/images/car6.jpg", title: "Ambattur Clothing" },
  {
    hq: "/hq/ruby-hall.jpg", path: "/images/hospital.png",
    title: "Ruby Hall Multispeciality Hospital, Pune",
  },
  {
    hq: "/images/institution.png",
    path: "/images/institution.png",
    title: "Zensar Technologies Ltd, Kharadi, Pune",
  },
  { hq: "/hq/clover-hills.jpg", path: "/images/port2.jpg", title: "Clover Hills Plaza, Pune" },
  { hq: "/images/baker.jpg", path: "/images/baker.jpg", title: "Baker Street, Africa" },
  { hq: "/hq/dosti-vihar.jpg", path: "/images/port5.jpg", title: "Dosti Vihar, Thane" },
  { hq: "/hq/industrial.jpg", path: "/images/industrial.jpg", title: "Industrial Buildings for Jayesh Builders, Khopoli" },
  { hq: "/hq/four-seasons.jpg", path: "/images/port7.jpg", title: "Four Seasons Winery, Baramati" },
  {
    hq: "/images/residential.png",
    path: "/images/residential.png",
    title: "Mahavir Kalpavruksha at Thane for Damji Shamji Shah Group",
  },
  { hq: "/images/school.png", path: "/images/school.png", title: "S R International School, Warangal" },
  {
    hq: "/images/Symbiosis Hostel,Pune-.jpg", 
    path: "/images/Symbiosis Hostel,Pune-.jpg",
    title: "Symbiosis Hostel, Pune",
  },
  { hq: "/images/Taj Vivanta Udaipur.jpg", path: "/images/Taj Vivanta Udaipur.jpg", title: "Taj Vivanta, Udaipur" },
  {
    hq: "/images/vitech,Shahpur,Mumbai.png",
    path: "/images/vitech,Shahpur,Mumbai.png",
    title: "Vitech, Shahpur, Mumbai",
  },
  { hq: "/images/waya bungalow,Pune.jpg", path: "/images/waya bungalow,Pune.jpg", title: "Waya Bungalow, Pune" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="text-center bg-white" id="gallery">
        <h1 className="mt-16 mb-10 text-3xl font-bold text-gray-700">
          GALLERY
        </h1>
      </div>
      <div className="mt-10 mb-20">
        <div className="grid grid-cols-4 gap-5 p-5 mx-auto mb-5">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.path}
                width={500}
                height={300}
                alt={image.title}
                layout="responsive"
              />
              {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-2 text-white text-center">
                {image.title}
              </div> */}
              <div className="md:absolute bg-black bg-opacity-95 top-0 left-0 flex justify-center items-center h-full w-full opacity-0 hover:opacity-100 transition-all duration-500">
                <div className="md:absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className=" text-white px-1 text-center">
                    {image.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="z-20">
            <div className="relative mx-auto mt-20 max-w-4xl">
              <Image
                src={images[selectedImage].hq}
                alt={images[selectedImage].title}
                width={800}
                height={800}
                layout="responsive"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  className="p-2 mt-4 text-white bg-gray-800 border border-white rounded-full"
                  onClick={handlePrevClick}
                >
                  <BsArrowLeftCircleFill size={16} />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  className="p-2 mt-4 text-white bg-gray-800 border border-white rounded-full"
                  onClick={handleNextClick}
                >
                  <BsFillArrowRightCircleFill size={16} />
                </button>
              </div>
              <button
                className="absolute top-4 right-4 p-2 text-white bg-gray-800 border border-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <FaWindowClose size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
