import React from 'react';
import Image from 'next/image';

const Cafeteria = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          src="/images/cafeteria.jpg"
          alt="cafeteria"
          fill
          priority
          
          className="z-0 object-cover"
        />
           <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">CAFETERIA</h1>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Cafeteria</h2>
        <p className="text-gray-700">
        Our school has a modern cafeteria which serves delicious and fresh breakfast, meal, bakeries, tea, coffee, cold drinks and snacks.
        </p>
      </div>
    </div>
  );
};

export default Cafeteria;
