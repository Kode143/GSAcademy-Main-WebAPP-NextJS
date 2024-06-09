import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ImagePreview({ images, currentIndex, onClose, onPrev, onNext }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="relative max-w-screen-lg w-full h-full flex items-center justify-between">
        {currentImageIndex !== 0 && (
          <button
            className="absolute x-1/2 left-0 items-center text-white text-4xl cursor-pointer bg-gray-800 h-10 w-10 flex justify-center rounded-full hover:bg-red-700"
            onClick={handlePrev}
          >
            ⪻
          </button>
        )}
        <Image height={100} width={1500}
          src={images[currentImageIndex].secure_url}
          alt="Image Preview"
          className="w-full h-full object-contain"
        />
        {currentImageIndex !== images.length - 1 && (
          <button
            className="absolute x-1/2 right-0 items-center text-white text-4xl cursor-pointer bg-gray-800 h-10 w-10 flex justify-center rounded-full hover:bg-red-700"
            onClick={handleNext}
          >
            ⪼
          </button>
        )}
        <button
          className="absolute top-2 right-2 items-center text-white text-4xl cursor-pointer bg-red-800 h-10 w-10"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
