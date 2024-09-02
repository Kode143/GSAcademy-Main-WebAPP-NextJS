import React from 'react';
import Image from 'next/image';

const HealthCare = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src="/images/healthcare.jpg"
          alt="Health Care"
          fill
          priority
          
          className="z-0 object-cover"
        />
           <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">HEALTH CARE</h1>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Health Care</h2>
        <p className="text-gray-700">
        Your health matters to us because healthy students make our school community succeed!
        </p>
      </div>
    </div>
  );
};

export default HealthCare;
