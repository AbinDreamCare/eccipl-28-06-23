import { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          <Image src={image} width={300} height={300} alt={`Image ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
