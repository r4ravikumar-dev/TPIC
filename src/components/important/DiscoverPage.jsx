import React from 'react'
import Message from './Message'

function DiscoverPage() {
  return (
    <>
    <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      <div className='flex flex-wrap flex-col justify-center items-center text-center'>
      <h1 className='text-base3 font-SFPro text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[135%]'>
        Who we are?
      </h1>
      <div className='text-center mt-4 inline-block h-1 w-[160px] sm:w-[240px] md:w-[320px] bg-base2 rounded-lg'></div>
      </div>
      <p className='mt-10 text-white text-center text-[16px] sm:text-[20px] -tracking-tight leading-[135%]'>
      The Technology Pre-Incubation Cell is a student-run initiative designed to nurture and develop early-stage tech ideas and innovations. It serves as a foundational platform for aspiring entrepreneurs, researchers, and students to refine their concepts and transform them into viable business models.  <br  />
      The cell offers a range of services, including mentorship, access to resources, and valuable networking opportunities. By providing a structured environment, the cell helps minimize risks and enhances the chances of success for start-ups, allowing ideas to evolve into market-ready products or services. This student-driven approach bridges the gap between raw innovation and market entry, fostering a dynamic culture of entrepreneurship and technological advancement among the next generation of innovators.
      </p>
      </div>
      <div className='mt-8 sm:mt-12 md:mt-16'>
      <Message />
      </div>
    </div>
    </>
  )
}

export default DiscoverPage