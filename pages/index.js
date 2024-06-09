
import PrincipalMessage from "@/Components/PrincipalMessage";
import Header from "@/Components/Header";
import ImageSliders from "@/Components/ImageSliders";
import WelcomeBox from "@/Components/WelcomeBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Slider } from "@/models/slider";
import ContactForm from "@/Components/ContactForm";
import ArticlesBox from "@/Components/ArticlesBox";
import Footer from "@/Components/Footer";
import MapBox from "@/Components/MapBox";

import { Article } from "@/models/article";
import Notice from "@/models/notice";
import { useState } from "react";
import NoticeModal from "@/Components/NoticeModal";

export default function HomePage({sliders, articles, notice}){
  const selectedArticles = articles.slice(0, 3);
  const [isModalOpen, setIsModalOpen] = useState(!!notice);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    <div>
     <Header />
     <div className="flex flex-col"> 
        <ImageSliders key={sliders._id} sliders={sliders}  />
        <WelcomeBox />
       <PrincipalMessage/>
       <div className='mt-6'>
 

   
    <ArticlesBox  articles={selectedArticles}  />
 
</div>

<div className='flex flex-col lg:flex-row justify-around ms-10 mt-4 mb-6 me-4'>
  <div className='order-2 lg:order-1 flex lg:block'>
    <div className='w-full lg:w-[650px]'>
      <MapBox className='w-full lg:w-[650px]' />
    </div>
  </div>
  <div className='order-1 lg:order-2  mb-4 flex mt-3 lg:mt-0 lg:block'>
    <div className='w-full'>
      <ContactForm />
    </div>
  </div>
</div>
       <Footer />
      </div>
      {notice && (
        <NoticeModal isOpen={isModalOpen} closeModal={closeModal} notice={notice} />
      )}
    </div>
  )
}

export async function getServerSideProps() {
  await mongooseConnect();
  const sliders = await Slider.find({}, null, { sort: { '_id': -1 } });
  const articles = await Article.find({}, null, { sort: { '_id': -1 } });
  const notice = await Notice.findOne({}, null, { sort: { '_id': -1 } });

  return {
    props: {
      sliders: JSON.parse(JSON.stringify(sliders)),
      articles: JSON.parse(JSON.stringify(articles)),
      notice: notice ? JSON.parse(JSON.stringify(notice)) : null,
    },
  };
}