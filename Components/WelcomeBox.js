import React from 'react';
import FacilitiesBox from './FacilitiesBox';
import AnimatedText from './AnimatedText';
import AnimatedImage from './AnimatedleftImage';
import AnimatedRightImage from './AnimatedRightImage';

const WelcomeBox = () => {
    return (
        <div className='relative flex flex-col bg-slate-200 mt-4 pb-6 overflow-hidden'>
            {/* Top Left Image */}
            <div className='absolute top-2 left-4 sm:left-10 md:left-32 h-auto'>
                <AnimatedRightImage 
                    src='/images/png2.png' 
                    alt='Left Image' 
                    width={60} 
                    height={70} 
                    className='w-[60px] h-[110px] sm:w-[100px] sm:h-[110px] md:w-[150px] md:h-[140px] object-contain'
                />
            </div>

            {/* Top Right Image with Animation */}
            <div className='absolute top-2 right-4 sm:right-10 lg:right-12'>
                <AnimatedImage 
                    src='/images/png1.png' 
                    alt='Right Image' 
                    width={120} 
                    height={100} 
                    className='w-[120px] h-[100px] sm:w-[150px] sm:h-[130px] md:w-[180px] md:h-[150px] object-contain'
                />
            </div>

            <div className='flex flex-col text-center mt-8 mb-4 px-4 sm:px-10 lg:px-0'>
                <AnimatedText text='Welcome To' className='font-semibold text-xl sm:text-2xl lg:text-5xl'/>
                <div className='flex flex-col sm:flex-row font-bold text-2xl lg:text-5xl lg:mb-4 justify-center'>
                    <AnimatedText text="Golden" className='text-yellow-600 ' />
                    <AnimatedText text="Supervision" className='text-red-600' />
                    <AnimatedText text="Academy" className='text-black' />
                </div>
            </div>

            <div className='text-center mb-4 px-4 sm:px-10 lg:px-0'>
                <div className=''>
                    <AnimatedText text='The Mission of The Golden Supervision Academy is to empower our children to achieve their greatest potential both as students and as members of their communities.'/>
                </div>
                <AnimatedText className='font-semibold text-base sm:text-lg mt-4' text='"शिक्षा मात्र होइन संस्कार युक्त शिक्षा"' />
            </div>

            <FacilitiesBox />
        </div>
    );
};

export default WelcomeBox;
