import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import AnimatedBox from './AnimatedBox';
import Link from 'next/link';

const FacilitiesCard = () => {
  return (
    <div className=' grid grid-cols-1 gap-6 my-6 mx-12 p-2 lg:grid-cols-2'> 
  <AnimatedBox>
        <Link href="/facilities/computer-lab">
          <div className="flex flex-col lg:flex-row items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
            <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-full md:rounded-t-lg md:rounded-s-lg relative">
              <Image height={50} width={300}
                src="/images/clab1.jpg"
                alt="Computer Lab"
                
                className='object-cover'
                style={{ width: 'auto', height: '100%' }}
                priority
              />
            </div>
            <div className="flex flex-col justify-between p-8 ms-2 w-full lg:w-1/2 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Computer Lab</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Golden Supervision Academy has a high tech computer lab with a reliable networking system.</p>
            </div>
          </div>
        </Link>
      </AnimatedBox>


      <AnimatedBox>
     <Link href="/facilities/library">
      <div className="flex flex-col lg:flex-row items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
        {/* Use the Next.js Image component */}
        <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-72 md:rounded-t-lg md:rounded-s-lg relative">
          <Image height={50} width={300}
            src="/images/library.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
            className='object-cover'
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-2 ms-2 w-full lg:w-1/2 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Library</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Taking library as the repertoire of knowledge and information, Our Academy has well-managed library with adequate stock of textbooks, reference materials, research articles, journals and unlimited internet facility.</p>
        </div>
      </div> 
      </Link>
      </AnimatedBox>

     
      <AnimatedBox>
        <Link href="/facilities/cafeteria">
      <div className="flex flex-col lg:flex-row  items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
        {/* Use the Next.js Image component */}
        <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-72 md:rounded-t-lg md:rounded-s-lg relative">
          <Image height={50} width={300}
            src="/images/cafeteria.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
            className='object-cover'
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-4 ms-2 w-full lg:w-1/2 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cafeteria</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The school has a modern cafeteria which serves delicious and fresh breakfast, meal, bakeries, tea, coffee, cold drinks and snacks.</p>
        </div>
      </div>
      </Link>
      </AnimatedBox>


      <AnimatedBox>
        <Link href="/facilities/science-lab">
      <div className="flex flex-col lg:flex-row items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
        {/* Use the Next.js Image component */}
        <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-72 md:rounded-t-lg md:rounded-s-lg relative">
          <Image height={50} width={300}
            src="/images/science lab.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
            className='object-cover'
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-7 ms-2 w-full lg:w-1/2 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Science Lab</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Golden Supervision Academy has well-equipped separate and spacious labs for Physics, Chemistry and Biology.</p>
        </div>
      </div>
      </Link>
      </AnimatedBox>
     

      <AnimatedBox>
        <Link href="/facilities/school-bus">
      <div  className="flex flex-col lg:flex-row items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
        {/* Use the Next.js Image component */}
        <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-72 md:rounded-t-lg md:rounded-s-lg relative">
          <Image height={50} width={200}
            src="/images/bus.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
            className='object-cover h-full lg:h-60'
            style={{ width: 'auto', height: '100%' }}
            priority
           
          />
        </div>
        <div className="flex flex-col justify-between p-4 ms-2 w-full lg:w-1/2 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School Bus</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We understand the challenges of walking on jungle and hilly roads. Take advantage of our school bus service for a comfortable and safe journey to school, without the hassle of long walks.</p>
        </div>
      </div>
      </Link>
</AnimatedBox>

<AnimatedBox>
  <Link href="/facilities/health-care">
      <div className="flex flex-col lg:flex-row items-center bg-white cursor-pointer border border-gray-200 rounded-lg shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full h-full lg:h-64">
        {/* Use the Next.js Image component */}
        <div className="object-cover w-full lg:w-1/2 h-full md:h-auto md:w-72 md:rounded-t-lg md:rounded-s-lg relative">
          <Image height={50} width={200}
            src="/images/healthcare.jpg" // Update the image source for the first card
            alt="Image description" // Add alt text for accessibility
           
            className='object-cover h-full lg:h-60 ms-12'
            style={{ width: 'auto', height: '100%' }}
            priority
           
          />
        </div>
        <div className="flex flex-col justify-between p-4 ms-2 w-full lg:w-1/2 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Health Care</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your health matters to us because healthy students make our school community succeed!</p>
        </div>
      </div>
      </Link>
      </AnimatedBox>

    </div>
  );
};

export default FacilitiesCard;
