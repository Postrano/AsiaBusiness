'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    '/images/bs1.jpg',
    '/images/bs2.jpg',
    '/images/bs3.jpg',
    '/images/bs5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Business Quote */}
      <div className="relative z-10 text-center  text-white px-4">
        <h2 className="text-xl sm:text-2xl md:text-5xl font-bold leading-snug">
          "Success is not the key to happiness.<br />  
          Happiness is the key to success."
        </h2>
        <p className="text-sm sm:text-lg mt-2 font-semibold">– Albert Schweitzer</p>
      </div>

      {/* Slideshow */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Hero;
