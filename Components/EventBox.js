import React from 'react';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const EventBox = ({ events }) => {
  return (
    <>
      <div className='flex flex-col items-center '>
      <AnimatedBox>
      <div className='relative'>
          <Image height={300} width={1500}
            src="/images/event.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
            className='w-full h-auto'
          />
          <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-white'>
            Events
          </h1>
        </div>
      </AnimatedBox>
    
     
       <div className='m-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
          {events.map(event => (
              <AnimatedBox key={event._id} >
            <div key={event._id} className='bg-gray-100 rounded-lg p-4 shadow-md'>
              <h2 className='text-xl font-bold'>{event.title}</h2>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <Image height={50} width={300} src={event.images[0].secure_url} alt={event.title} className='mt-2 w-full h-auto rounded-lg' />
              <p>Description: {event.description}</p>
            </div>
            </AnimatedBox>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default EventBox;
