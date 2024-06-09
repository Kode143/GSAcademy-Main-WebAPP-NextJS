import React from 'react'
import { MessageIcon } from './Icons'
import AnimatedBox from './AnimatedBox'
import Image from 'next/image'

const PrincipalMessage = () => {
  return (
    <>
      <AnimatedBox >
        <div className="p-5 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className='w-full md:w-1/2 ms-4 md:ms-8 me-4'>
            <h1 className='text-2xl font-semibold mb-7'>
                Message From The Principal
            </h1>
            <MessageIcon />
            <p className="text-justify me-4">
              It is with great pleasure that I welcome you and your family to Golden Supervision Academy - a school located at
              a landmark location with abundant outdoor green space and a building with character and interesting history. The school’s approach to teaching and learning, holistic care,
              diligent and dedicated faculty and staff members and a strong commitment to parent-school
              relationship ensures that every child gets the best of education - right in the heart of Chapakot
              city! It is extremely important that we and you, the parents, share a similar vision for your
              child’s development as we partner on this journey of learning. We are happy to share a glimpse into
              our school and community with you, through this website, and are ready to assist you in making a
              choice for the benefit of your child.
            </p>
          </div>

          <div className="mt-5 text-center md:w-1/2 md:ml-5">
            <p className="italic text-lg mb-4 md:text-xl lg:text-2xl text-gray-600">&quot;At the heart of every great teacher is an ardent learner.&quot;</p>
            <Image height={100} width={300} 
              src="/images/principal.jpg"
              alt=""
              className="block w-auto mx-auto max-h-72 rounded-full object-cover"
            
            />
            <h3 className="font-bold mt-5 mb-4  text-gray-800">-Hari Prasad Adhikari</h3>
            <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700">Principal</h4>
          </div>
        </div>
      </AnimatedBox>
    </>
  )
}

export default PrincipalMessage
