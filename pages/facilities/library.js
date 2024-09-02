import React from 'react';
import Image from 'next/image';

const Library = () => {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
           src="/images/library.jpg"
          alt="Library"
          fill
          priority
          
          className="z-0 object-cover"
        />
           <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl font-bold text-white">LIBRARY</h1>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Library</h2>
        <p className="text-gray-700">
        Taking library as the repertoire of knowledge and information, Our Academy has well-managed library with adequate stock of textbooks, reference materials, research articles, journals and unlimited internet facility.
        </p>
      </div>
    </div>
  );
};

export default Library;
