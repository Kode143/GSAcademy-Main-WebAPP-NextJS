import Link from 'next/link';
import React from 'react';
import { ClockIcon } from './Icons';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const ArticleComponents = ({ articles }) => {
  return (
    <div className='px-4'>

<h1 className='mt-4 text-2xl ms-6 font-semibold '>
      Latest Articles:
    </h1>
  <div className=" grid grid-cols-1 lg:grid-cols-3  mt-2  gap-3 justify-between px-4">

      {articles.map((article) => (
        <AnimatedBox key={article._id}>
        <div
          key={article._id}
          className="w-full h-full ps-2 mb-3 border border-gray-200 rounded-lg shadow-lg flex hover:bg-slate-100"
        >
          <div className="w-1/2 mb-2 space-y-7">
            <Link href={`/articles/${article._id}`}>
            <h3 className="text-lg font-semibold  hover:underline">{article.title}</h3>
            </Link>
            <div className='flex  gap-2'>
              <ClockIcon  className='h-4 mt-1'/>
            <p className="text-sm text-gray-600 ">{new Date(article.publishedDate).toLocaleDateString()}</p>
          </div>
              </div>
           
          <div className="w-1/2 ">
          <Link href={`/articles/${article._id}`}>
            <Image height={50} width={300}
              src={article.images[0].secure_url}
              alt={article.title} 
              className="w-full h-full object-cover rounded-lg hover:opacity-50 transition-opacity duration-300"
            />
            </Link>
          </div>
        </div>
        </AnimatedBox>
      ))}
    </div>
  
    </div>
  );
};

export default ArticleComponents;




