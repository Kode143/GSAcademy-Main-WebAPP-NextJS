
import { Image } from '@/models/Image';
import React from 'react'
import { mongooseConnect } from "@/lib/mongoose";
import PhotoGallery from '@/Components/PhotoGallery';

export default function gallery ({images}) {
  return (
     <>

    <PhotoGallery   images={images} />

    
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