import React, { useState } from 'react';
import Link from "next/link";
import { BookIcon, BusIcon, ComputerIcon, GuitarPickIcon, HeartIcon } from './Icons';
import AnimatedBox from './AnimatedBox';

const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const FacilitiesBox = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    return (
        <div className='grid md:grid-cols-4 gap-6 justify-center ms-4 me-4'>
            <AnimatedBox>
                <Link href={'/facilities'}>
                    <div
                        className='bg-white text-center p-4 shadow-xl rounded-3xl hover:bg-red-500 '
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <div className="relative w-24 h-24 mx-auto">
                            <GuitarPickIcon isHovered1={isHovered1} initialFillColor="#f007d8" />
                            <div className="absolute top-0 w-full mt-2 h-10 flex items-center justify-center">
                                <ComputerIcon className='h-16 w-10' />
                            </div>
                        </div>
                        <h1 className={`font-semibold ${isHovered1 ? 'text-white' : 'text-black'}`}>Computer Lab</h1>
                        <p className={isHovered1 ? 'text-white' : 'text-black'}>
                            {truncateText('Golden Supervision Academy has a high tech computer lab with a reliable networking system.', 15)}
                        </p>
                    </div>
                </Link>
            </AnimatedBox>

            <AnimatedBox>
                <Link href={'/facilities'}>
                    <div
                        className='bg-white text-center p-4 shadow-xl rounded-3xl hover:bg-green-500'
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        <div className="relative w-24 h-24 mx-auto">
                            <GuitarPickIcon isHovered4={isHovered4} initialFillColor="green" />
                            <div className="absolute top-0 w-full mt-3 h-10 flex items-center justify-center">
                                <HeartIcon />
                            </div>
                        </div>
                        <h1 className={`font-semibold ${isHovered4 ? 'text-white' : 'text-black'}`}>Health Care</h1>
                        <p className={isHovered4 ? 'text-white' : 'text-black'}>
                            {truncateText('Your health matters to us because healthy students help our school community succeed!', 15)}
                        </p>
                    </div>
                </Link>
            </AnimatedBox>

            <AnimatedBox>
                <Link href={'/facilities'}>
                    <div
                        className='bg-white text-center p-4 shadow-xl rounded-3xl hover:bg-blue-500'
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <div className="relative w-24 h-24 mx-auto">
                            <GuitarPickIcon isHovered2={isHovered2} initialFillColor="#647575" />
                            <div className="absolute top-0 w-full mt-3 h-10 flex items-center justify-center">
                                <BusIcon />
                            </div>
                        </div>
                        <h1 className={`font-semibold ${isHovered2 ? 'text-white' : 'text-black'}`}>Transportation</h1>
                        <p className={isHovered2 ? 'text-white' : 'text-black'}>
                            {truncateText('Take advantage of our school bus service for a comfortable and safe journey to school, without the hassle of long walks.', 15)}
                        </p>
                    </div>
                </Link>
            </AnimatedBox>

            <AnimatedBox>
                <Link href={'/facilities'}>
                    <div
                        className='bg-white text-center p-4 shadow-xl rounded-3xl hover:bg-yellow-500'
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <div className="relative w-24 h-24 mx-auto">
                            <GuitarPickIcon isHovered3={isHovered3} initialFillColor="#1338f0" />
                            <div className="absolute top-0 w-full mt-3 h-10 flex items-center justify-center">
                                <BookIcon />
                            </div>
                        </div>
                        <h1 className={`font-semibold ${isHovered3 ? 'text-white' : 'text-black'}`}>Library</h1>
                        <p className={isHovered3 ? 'text-white' : 'text-black'}>
                            {truncateText('Taking library as the repertoire of knowledge and information, GSA has well managed library with adequate stock of textbooks, reference materials, research articles, journals and unlimited internet facility.', 15)}
                        </p>
                    </div>
                </Link>
            </AnimatedBox>
        </div>
    );
};

export default FacilitiesBox;
