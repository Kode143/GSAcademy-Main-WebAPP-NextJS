import React from 'react'
import AnimatedRightImage from './AnimatedRightImage'
import MapBox from './MapBox'
import ContactForm from './ContactForm'

const MapAndMessage = () => {
  return (
    <>
    <div className= 'relative flex flex-col lg:flex-row justify-around ms-10 mt-4 mb-6 me-4 lg:ms-10'>
<div className='absolute top-0 -left-10 lg:top-16 lg:-left-6'>
                <AnimatedRightImage
                    src='/images/png4.png' 
                    alt='Right Image' 
                    width={80} 
                    height={100} 
                    className='w-[55px] h-[100px] sm:w-[150px] sm:h-[130px] md:w-[180px] md:h-[150px] object-contain'
                />
            </div>
  <div className='order-2 lg:order-1 flex lg:block'>
    <div className='w-full lg:w-[650px]'>
      <MapBox className='w-full lg:w-[650px]' />
    </div>
  </div>
  <div className='order-1 lg:order-2  mb-4 flex mt-3 lg:mt-0 lg:block'>
    <div className='w-full'>
      <ContactForm />
    </div>
  </div>
</div>
    </>
  )
}

export default MapAndMessage