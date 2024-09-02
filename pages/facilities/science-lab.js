import React from 'react';
import Image from 'next/image';

const ScienceLab = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src="/images/science lab.jpg"
          alt="science Lab"
          fill
          priority
          
          className="z-0 object-cover"
        />
           <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">SCIENCE LAB</h1>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Science Lab</h2>
        <p className="text-gray-700">
        Golden Supervision Academy has well-equipped separate and spacious labs for Physics, Chemistry and Biology.
        </p>
      </div>
    </div>
  );
};

export default ScienceLab;