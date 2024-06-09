import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const PhotoGallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(10);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 10);
    if (visibleImages + 12 >= images.length) {
      setLoadMoreVisible(false);
    }
  };

  const openImagePreview = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="p-2 md:p-5">
      <div className="flex flex-wrap justify-center -mx-1">
  {images.slice(0, visibleImages).map((image, index) => (
    <AnimatedBox key={index} >
    <div key={index} className="w-full sm:w-auto mx-1 mb-1">
      <Image height={100} width={300}
        src={image.secure_url}
        alt={image.alt}
        onClick={() => openImagePreview(image.secure_url, index)}
        style={{ aspectRatio: `${image.width / image.height}` }}
        className="w-full h-56 object-contain rounded-lg p-1 cursor-pointer"
      />
    </div>
    </AnimatedBox>
  ))}
</div>

        {selectedImage && (
          <ImagePreview
            imageUrl={selectedImage}
            onClose={closeImagePreview}
            images={images}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
      {loadMoreVisible && (
        <div className="text-center mb-4">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
