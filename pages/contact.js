import AnimatedBox from '@/Components/AnimatedBox';
import ContactForm from '@/Components/ContactForm';
import { CallIcon2, LocationIcon2, MessageIcon2 } from '@/Components/Icons';
import MapBox from '@/Components/MapBox';
import Link from 'next/link';
import React from 'react';

const contact = () => {
  return (
    <>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/images/cover3.jpg')` }}
      >
        <div className="bg-black bg-opacity-35 w-full h-full flex flex-col-reverse lg:flex-row lg:py-3">
          <div className="lg:w-1/2 w-full">
            <AnimatedBox>
              <div className="flex px-12 py-2 gap-2">
                <div className="bg-red-700 p-2 rounded-full flex items-center justify-center w-10 h-10">
                  <LocationIcon2 className="h-5" />
                </div>
                <div>
                  <h className="text-lg text-red-800 font-bold">Location</h>
                  <Link
                    href={'https://maps.app.goo.gl/A4d2BGtvpwWJdkKj9'}
                    className="flex hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Chapakot-08, Damachour, Syangja, Nepal</p>
                  </Link>
                </div>
              </div>
            </AnimatedBox>

            <AnimatedBox>
              <div className="flex px-12 py-2 gap-2">
                <div className="bg-red-700 p-2 rounded-full flex items-center justify-center w-10 h-10">
                  <MessageIcon2 className="h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-red-800">Email:</h2>
                  <Link
                    href={'mailto:gsa33545@gmail.com'}
                    className="flex hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>gsa92388@gmail.com</p>
                  </Link>
                </div>
              </div>
            </AnimatedBox>

            <AnimatedBox>
              <div className="flex px-12 py-2 gap-2">
                <div className="bg-red-700 p-2 rounded-full flex items-center justify-center w-10 h-10">
                  <CallIcon2 className="h-5" />
                </div>
                <div>
                  <h3 className="text-lg text-red-800 font-bold ">Phone:</h3>
                  <Link
                    href={'tel:+9779856013535'}
                    className="flex hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>9856013535, 9812345678</p>
                  </Link>
                </div>
              </div>
            </AnimatedBox>

            <div className="mt-3 px-12 mb-2 rounded-lg">
              <MapBox height="300px" />
            </div>
          </div>
        <div className='lg:w-1/2'>
          <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
