import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const ImageSliders = ({ sliders }) => {
  const zoomInProperties = {
    scale: 1.4,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  return (
    <AnimatedBox>
      <div className="w-full h-full lg:h-screen">
        <Zoom {...zoomInProperties}>
          {sliders.map((slider, sliderIndex) => (
            <div key={sliderIndex} className="relative flex flex-col w-full h-full lg:h-screen">
              {slider.images.map((image, imageIndex) => (
                <Image height={100} width={1500} key={imageIndex} src={image.secure_url} alt={slider.title} priority className="w-full h-full object-cover" />
              ))}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col gap-4 p-4 text-slate-100 text-center lg:text-start">
                    <h1 className="text-4xl font-semibold">{slider.title}</h1>
                    <p className="text-xl">{slider.description}</p>
                    <div className="flex justify-center lg:justify-start">
                      <Link href="/facilities" className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-4 rounded">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </AnimatedBox>
  );
};

export default ImageSliders;
