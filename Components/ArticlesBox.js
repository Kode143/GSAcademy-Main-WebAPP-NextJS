import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedBox from './AnimatedBox';
import Image from 'next/image';

const ArticlesBox = ({ articles }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const truncateDescription = (description, length) => {
    if (description.length <= length) return description;
    return description.substring(0, length) + '...';
  };

  const stripHTML = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const convertReactQuillToHTML = (quillText) => {
    if (typeof document !== 'undefined' && quillText) {
      const div = document.createElement('div');
      div.innerHTML = quillText;
      return div.innerHTML;
    } else {
      return '';
    }
  };

  return (
    <AnimatedBox>
    <div className="flex flex-col bg-slate-200 shadow-lg">
      <h2 className="ms-8 font-semibold text-lg">Latest Articles Published by our Teachers:</h2>
      <div className="flex flex-col ms-4 px-8 gap-8 lg:flex-row">
        {articles && articles.length > 0 ? (
          <>
            {/* Main Article */}
            
            <div className="w-full lg:w-8/12 bg-white mb-2 flex flex-col overflow-hidden">
              <Image height={50} width={600}
                src={articles[0].images[0].secure_url}
                alt={articles[0].title}
                className="mb-2 w-auto h-80"
                priority
              />
              <Link href={`/articles/${articles[0]._id}`} className='w-96'>
                <div
                  className="text-xl ms-4 font-semibold cursor-pointer hover:underline"
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  {articles[0].title}
                </div>
              </Link>
              <div className="ms-4">
                {isClient && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: truncateDescription(convertReactQuillToHTML(articles[0].description), 270),
                    }}
                  />
                )}
                <Link href={`/articles/${articles[0]._id}`}>
                  <span className="text-blue-500 cursor-pointer hover:underline"> Read More...</span>
                </Link>
              </div>
            </div>

            {/* Side Articles */}
            <div className="w-full lg:w-4/12 me-2 flex gap-4 lg:flex-col">
              {articles.slice(1).map((article) => (
                <div key={article._id} className="bg-white mb-2 rounded-lg overflow-hidden shadow-xl">
                  <Image height={0} width={300} property='high'
                    src={article.images[0].secure_url}
                    alt={article.title}
                    className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                  <Link href={`/articles/${article._id}`}>
                    <h3
                      className="p-1 text-base text-balance font-semibold cursor-pointer hover:underline"
                      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      {article.title}
                    </h3>
                  </Link>
                  <Link href={`/articles/${article._id}`}>
                    <div className="text-xs text-blue-500 cursor-pointer hover:underline ps-2 mb-1">
                      Read More...
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>No articles available</div>
        )}
      </div>
    </div>
    </AnimatedBox>
  );
};

export default ArticlesBox;
