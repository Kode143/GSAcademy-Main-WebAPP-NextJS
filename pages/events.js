import EventBox from '@/Components/EventBox';
import React from 'react';
import { mongooseConnect } from "@/lib/mongoose";
import { Event } from '@/models/event';

export default function Events({events}) {
  return (
    <>
   
    <EventBox events = {events} />
    
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