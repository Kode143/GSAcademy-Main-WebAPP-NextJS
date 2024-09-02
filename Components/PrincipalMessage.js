import React from 'react';
import { MessageIcon } from './Icons';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';
import AnimatedImage from './AnimatedleftImage';

const PrincipalMessage = () => {
  return (
    <AnimatedBox>
      <div className="relative p-4 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/cover.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-white opacity-85"></div> {/* Add this div for the background opacity */}
      
        <div className='relative w-full md:w-1/2 ms-2 md:ms-8 me-4 z-10'> {/* Add relative and z-index to position content above the background */}
          <h1 className='text-2xl font-semibold mb-7 text-black'>
            Message From The Principal
          </h1>
          <MessageIcon />
          <p className="text-justify me-4 text-black">
            It is with great pleasure that I welcome you and your family to Golden Supervision Academy - a school located at
            a landmark location with abundant outdoor green space and a building with character and interesting history. The school’s approach to teaching and learning, holistic care,
            diligent and dedicated faculty and staff members and a strong commitment to parent-school
            relationship ensures that every child gets the best of education - right in the heart of Chapakot
            city! It is extremely important that we and you, the parents, share a similar vision for your
            child’s development as we partner on this journey of learning. We are happy to share a glimpse into
            our school and community with you, through this website, and are ready to assist you in making a
            choice for the benefit of your child.
          </p>
        </div>

        <div className="relative mt-5 text-center md:w-1/2 md:ml-5 z-10"> {/* Add relative and z-index to position content above the background */}
          <p className="italic text-lg mb-4 md:text-xl lg:text-2xl text-black">&quot;At the heart of every great teacher is an ardent learner.&quot;</p>
          <Image
            height={100}
            width={300}
            src="/images/principal.jpg"
            priority
            alt="Principal's Picture"
            className="block w-auto mx-auto max-h-72 rounded-full object-cover"
          />
          <h3 className="font-bold mt-5 mb-4 text-black">-Hari Prasad Adhikari</h3>
          <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-black">Principal</h4>
        </div>
      </div>
    </AnimatedBox>
  );
}

export default PrincipalMessage;
