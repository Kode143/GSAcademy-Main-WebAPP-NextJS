import React from 'react'
import FacilitiesBox from './FacilitiesBox'
import AnimatedText from './AnimatedText'


const WelcomeBox = () => {


  return (
    <>
    <div className='flex flex-col bg-slate-200 mt-4 pb-6'>
    <div className='flex flex-col text-center mt-8 mb-8 '>
    <AnimatedText text='Welcome To' className='font-semibold text-2xl lg:text-5xl'/>
    <div className='flex  font-bold text-3xl lg:text-5xl  mb-4 justify-center'>
        <AnimatedText text="Golden" className='text-yellow-600 ' />
        <AnimatedText text="Supervision" className='text-red-600' />
        <AnimatedText text="Academy" className='text-black' />
    </div>
    <div className=''>
        <AnimatedText text='The Mission of The Golden Supervision Academy is to
        empower our children to achieve their greatest potential both as
        students and as members of their communities.'/>
    </div>
    <AnimatedText className='font-semibold text-lg mt-4'  text='"शिक्षा मात्र होइन संस्कार युक्त शिक्षा"' />
</div>

        <FacilitiesBox />
      

    </div>
    </>
  )
}

export default WelcomeBox