import React from 'react'
import Link from "next/link";
import { CallIcon2, FacebookIcon2, HandIcon, LocationIcon2, MessageIcon2, WaveIcon } from './Icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className='relative mt-2 bg-gradient-to-r from-blue-300 to-slate-300 lg:bg-none'>
      <div className='hidden md:block'>
          <WaveIcon />
        </div>

        <div className='lg:absolute inset-0 flex flex-col lg:flex-row justify-around mt-2'>
          <div className='p-4'>
            <h1 className='font-semibold text-xl ms-6'>
              About Us
            </h1>
            <Image width={400} height={50} src="/logo.png" className="w-36 h-16  m-4" alt="Golden Supervision Academy logo"  />
            <h2 className="">
                &quot;शिक्षा मात्र होइन संस्कार युक्त शिक्षा&quot;
            </h2>
          </div>
          <div className='p-4'>
            <h2 className='font-semibold text-xl'>
              Useful Links
            </h2>
            <div className='flex flex-col gap-4 mt-4'>
              <Link href={'/gallery'} className='flex gap-2 hover:text-yellow-600'>
                <HandIcon /> <h3>Gallery</h3>
              </Link>
              <Link href={'/gallery'} className='flex gap-2 hover:text-yellow-600'>
                <HandIcon /> <h3>Facilities</h3>
              </Link>
              <Link href={'/gallery'} className='flex gap-2 hover:text-yellow-600'>
                <HandIcon /> <h3>Events</h3>
              </Link>
              <Link href={'/gallery'} className='flex gap-2 hover:text-yellow-600'>
                <HandIcon /> <h3>Articles</h3>
              </Link>
              <Link href={'/gallery'} className='flex gap-2 hover:text-yellow-600'>
                <HandIcon /> <h3>About</h3>
              </Link>
            </div>
          </div>
          <div className='p-4'>
            <h4 className='font-semibold text-xl'>
              Contact Info
            </h4>
            <div className="flex flex-col gap-5 text-sm p-1 mt-4">
              <Link href={'https://maps.app.goo.gl/A4d2BGtvpwWJdkKj9'} className="flex hover:text-yellow-600" target="_blank" rel="noopener noreferrer">
                <LocationIcon2 className="w-6 h-6" />
                Chapakot-08, Damachour, Syangja, Nepal
              </Link>
              <Link href={'tel:+99454555454445'} className="flex gap-2 hover:text-yellow-600">
                <CallIcon2 className='h-6 w-6' />
                99454555454445, 44434534544544
              </Link>
              <Link href={'mailto:gsa33545@gmail.com'} className="flex gap-2 hover:text-yellow-600">
                <MessageIcon2 className='h-6 w-6' />
                gsa33545@gmail.com
              </Link>
              <Link href={'https://www.facebook.com/profile.php?id=100045764452801'} className='flex hover:text-yellow-600' target="_blank" rel="noopener noreferrer">
                <FacebookIcon2 className="w-5 h-6 me-2 hover:bg-white hover:rounded-xl" />
                गोल्डेन सुपर भिजन ऐकेडेमि
              </Link>
            </div>
          </div>
          <div className='lg:hidden mt-auto text-center'>
            <div>
              <p>
                <span className="font-bold">&copy;</span>
                Copyright 2024 Golden Supervision Academy All Rights Reserved |
                <span className="ml-1">Powered By: </span>
                <span className="font-semibold">B S</span>
              </p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block text-center'>
          <div>
            <p>
              <span className="font-bold">&copy;</span>
              Copyright 2024 Golden Supervision Academy All Rights Reserved |
              <span className="ml-1">Powered By: </span>
              <span className="font-semibold">B S</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
