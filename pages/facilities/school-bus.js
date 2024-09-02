import React from 'react';
import Image from 'next/image';

const SchoolBus = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src="/images/bus.jpg"
          alt="School Bus"
          fill
          priority
          
          className="z-0 object-cover"
        />
           <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">SCHOOL BUS</h1>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">School Bus</h2>
        <p className="text-gray-700">
        We understand the challenges of walking on jungle and hilly roads. Take advantage of our school bus service for a comfortable and safe journey to school, without the hassle of long walks.
        </p>
      </div>
    </div>
  );
};

export default SchoolBus;
