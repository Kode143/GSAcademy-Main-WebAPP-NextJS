
import { Article } from '@/models/article'
import React from 'react'
import { mongooseConnect } from "@/lib/mongoose";
import ArticleComponents from '@/Components/ArticleComponents';

const articles = ({articles}) => {
  return (
    <>

   <ArticleComponents  articles={articles}/>
  
    </>
  )
}

export default articles

export async function getServerSideProps() {
  await mongooseConnect();
 
  const articles = await Article.find({}, null, { sort: { '_id': -1 } });

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
}