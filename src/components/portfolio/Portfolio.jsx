import React from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: '/images/port1.jpg',
      text: 'CBI Headquarters, Mumbai',
      width: 'full',
      height: 'h-60'
    },
    {
      image: '/images/port2.jpg',
      text: 'Clover Hills Plaza, Pune',
      width: 'w-1/2',
      height: 'h-40'
    },
    {
      image: '/images/port3.jpg',
      text: 'Club Mahindra Resorts, Puducherry',
      width: 'w-1/2',
      height: 'h-40'
    },
    {
      image: '/images/port4.jpg',
      text: 'Club Mahindra Resorts, Lonavla',
      width: 'full',
      height: 'h-96'
    },
    {
      image: '/images/port5.jpg',
      text: 'Dosti Vihar, Thane',
      width: 'w-1/2',
      height: 'h-40'
    },
    {
      image: '/images/port6.jpg',
      text: 'Drama Theater, Thane',
      width: 'w-1/2',
      height: 'h-40'
    },
    {
      image: '/images/port7.jpg',
      text: 'Four Seasons Winery, Baramati',
      width: 'w-1/2',
      height: 'h-40'
    },
    {
      image: '/images/port8.jpg',
      text: 'Hilton Hotel, Goa',
      width: 'w-1/2',
      height: 'h-40'
    },
 
    // Add more portfolio items as needed
  ];

  return (
    <div className="w-full max-w-5xl gap-5 p-5 pb-10 mx-auto mb-10 space-y-5 grid grid-cols-4">
      {portfolioItems.map((item, index) => (
        <div
          className={`relative ${item.width} ${item.height}`}
          key={index}
        >
          <Image
            src={item.image}
            alt={item.text}
            width={500}
            height={500}
            layout="responsive"
            onClick={() => handleImageClick(index)}
          />
          <div className="text-overlay">
            <span className="hidden">{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
