import EventBox from '@/Components/EventBox';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import React from 'react';
import { mongooseConnect } from "@/lib/mongoose";
import { Event } from '@/models/event';

export default function Events({events}) {
  return (
    <>
    <Header />
    <EventBox events = {events} />
    <Footer />
    </>
  )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const events = await Event.find({}, null, { sort: { '_id': -1 } });
  
    return {
      props: {
        events: JSON.parse(JSON.stringify(events)),
      },
    };
  }