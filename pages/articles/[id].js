import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mongooseConnect } from "@/lib/mongoose";
import { Article } from '@/models/article'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { ClockIcon } from '@/Components/Icons';
import AnimatedText from '@/Components/AnimatedText';
import AnimatedBox from '@/Components/AnimatedBox';
import Image from 'next/image';

const ArticleId = ({ articles }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const [mainArticle, setMainArticle] = useState(null);
  const [sideArticles, setSideArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    if (id && articles) {
      const selectedArticle = articles.find(article => article._id === id);
      if (selectedArticle) {
        setMainArticle(selectedArticle);
        setSideArticles(articles.filter(article => article._id !== id));
      }
    }
  }, [id, articles]);

  const handleReadMore = (article) => {
    setMainArticle(article);
    setSideArticles(articles.filter(item => item._id !== article._id));
    router.push(`/articles/${article._id}`);
  };

  const handleLoadMore = () => {
    setVisibleArticles(prevVisibleArticles => prevVisibleArticles + 4);
  };

  const convertReactQuillToHTML = (quillText) => {
    if (typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = quillText;
      return div.innerHTML;
    } else {
      return '';
    }
  };

  if (!mainArticle) {
    return <div>Loading...</div>;
  }

  const articleHTML = convertReactQuillToHTML(mainArticle.description);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-start w-full">
        <div className="row gap-8 p-2 lg:flex lg:me-3">
          {mainArticle && (
            <div className="w-full lg:w-3/4 mr-8 flex flex-col">
              <AnimatedText text={mainArticle.title} className="text-4xl font-bold mb-2 text-center" />
              <AnimatedBox>
              <Image width={900} // Specify the width as a numeric value in pixels
  height={100} src={mainArticle.images[0].secure_url} alt={mainArticle.title} className="rounded-lg" />
              </AnimatedBox>
              <div className='flex justify-between'>
                <AnimatedBox>
                <h2 className="text-base ms-4">Published by: <span className='font-bold'>{mainArticle.publisher}</span></h2>
                </AnimatedBox>
                <div className='flex gap-2'>
                  <ClockIcon className='h-4 mt-1' />
                  <AnimatedBox>
                  <h3>{new Date(mainArticle.publishedDate).toLocaleDateString()}</h3>
                  </AnimatedBox>
                </div>
              </div>
              <div className="text-gray-700 lg:mb-4 ms-6 me-12 text-justify p-2 lg:p-6" dangerouslySetInnerHTML={{ __html: articleHTML }} />
            </div>
          )}

          <div className="w-full lg:w-1/4 me-2 lg:mt-12">
            {sideArticles.slice(0, visibleArticles).map((article) => (
              <AnimatedBox key={article._id}>
              <div key={article._id} className="p-2 border border-gray-200 rounded-lg shadow-lg mb-4 hover:bg-slate-100">
                <Image width={400} height={100} src={article.images[0].secure_url} alt={article.title} className="object-cover transition-transform duration-300 transform hover:scale-105" />
                <h3 className="text-lg font-semibold cursor-pointer hover:underline" onClick={() => handleReadMore(article)}>{article.title}</h3>
                <button
                  className="text-blue-500 hover:underline mb-2"
                  onClick={() => handleReadMore(article)}
                >
                  Read More...
                </button>
              </div>
              </AnimatedBox>
            ))}
            {visibleArticles < sideArticles.length && (
              <AnimatedBox>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700"
                onClick={handleLoadMore}
              >
                Load More
              </button>
              </AnimatedBox>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleId;

export async function getServerSideProps() {
  await mongooseConnect();
  const articles = await Article.find({}, null, { sort: { '_id': -1 } });

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
}
