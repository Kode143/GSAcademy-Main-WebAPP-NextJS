import Link from 'next/link';
import React from 'react';
import { ClockIcon } from './Icons';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const ArticleComponents = ({ articles }) => {
  const latestArticle = articles[0]; // Assuming the latest article is the first one

  return (
    <div className='px-0 mb-4'>
      
      {/* Latest Article Section */}
      <div className="relative h-64 w-full   overflow-hidden">
          <Image
          src={latestArticle.images[0].secure_url}
          alt={latestArticle.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute bottom-0 left-0 p-4 z-20 text-white">
        <Link href={`/articles/${latestArticle._id}`}>
          <div className="text-xl lg:text-3xl font-bold hover:text-slate-400">{latestArticle.title}</div>
          </Link>
          <Link href={`/articles/${latestArticle._id}`}>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Rest of the Articles */}
      <h1 className='mt-4 text-2xl ms-8 font-semibold'>
        Latest Articles:
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 gap-6 justify-between px-8">
        {articles.slice(1).map((article) => (
          <AnimatedBox key={article._id}>
            <div
              key={article._id}
              className="w-full h-full bg-slate-200 ps-2 mb-3 border border-gray-200 rounded-lg shadow-lg flex hover:bg-slate-100"
            >
              <div className="w-1/2 mb-2 space-y-7">
                <Link href={`/articles/${article._id}`}>
                  <h3 className="text-lg font-semibold hover:underline">{article.title}</h3>
                </Link>
                <div className='flex gap-2'>
                  <ClockIcon className='h-4 mt-1' />
                  <p className="text-sm text-gray-600">{new Date(article.publishedDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="w-1/2">
                <Link href={`/articles/${article._id}`}>
                  <Image
                    height={50}
                    width={300}
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
