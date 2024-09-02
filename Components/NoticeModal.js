import React, { useEffect } from 'react';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const NoticeModal = ({ isOpen, closeModal, notice }) => {
  // Disable scrolling on the main page when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up by resetting the scroll style on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !notice) return null;

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50 modal-overlay"
      onClick={handleOutsideClick}
    >
      <div className="relative h-80 w-full bottom-28 md:h-80 sm:h-64 lg:bottom-2 lg:h-screen max-w-2xl mx-auto p-8 ">
        <AnimatedBox>
          <div className="relative bg-white pt-2 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 me-2 text-red-600 hover:text-red-800 font-bold text-xl right-2"
            >
             X
            </button>
            <h2 className="text-lg font-bold text-center ">
              {notice.title || 'Notice'}
            </h2>
            <div className="text-sm">
              {notice.noticeType === 'image' ? (
                notice.images.map((image, index) => (
                  <Image
                  key={index}
                  src={image.secure_url}
                  alt="Notice"
                  priority
                  width={600}
                  height={300}
                  className="rounded-lg object-cover mb-4 w-full h-auto"
                />
                
                ))
              ) : (
                <p>{notice.textNotice}</p>
              )}
            </div>
          </div>
        </AnimatedBox>
      </div>
    </div>
  );
};

export default NoticeModal;
