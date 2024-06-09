import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { Image } from '@/models/Image';
import React from 'react'
import { mongooseConnect } from "@/lib/mongoose";
import PhotoGallery from '@/Components/PhotoGallery';

export default function gallery ({images}) {
  return (
     <>
     <Header />
    <PhotoGallery   images={images} />

     <Footer />
     </>
  )
}


export async function getServerSideProps() {
    await mongooseConnect();
    const images = await Image.find({}, null, { sort: { '_id': -1 } });
  
    return {
      props: {
        images: JSON.parse(JSON.stringify(images)),
      },
    };
  }