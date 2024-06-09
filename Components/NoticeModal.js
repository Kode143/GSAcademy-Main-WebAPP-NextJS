// components/NoticeModal.js
import React from 'react';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const NoticeModal = ({ isOpen, closeModal, notice }) => {
  if (!isOpen || !notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <AnimatedBox>
      <div className="bg-white p-1 rounded-lg max-w-2xl max-h-full mx-4 mb-2">
        <h1 className="font-bold text-2xl text-center">NOTICE BOARD</h1>
        <h2 className="text-lg font-bold mt-2 text-center">{notice.title || 'Notice'}</h2>
        <div className="mt-2 text-sm">
          {notice.noticeType === 'image' ? (
            notice.images.map((image, index) => (
              <Image height={200} width={1500} key={index} src={image.secure_url} alt="Notice" className="w-full h-auto mb-4" />
            ))
          ) : (
            <p className=''>{notice.textNotice}</p>
          )}
        </div>
        <button onClick={closeModal} className="mt-1 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700">
          Close
        </button>
      </div>
      </AnimatedBox>
    </div>
  );
};

export default NoticeModal;
