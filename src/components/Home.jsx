import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name='home' className='w-full h-[750px] bg-[#313640]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#F2F2F2] text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#F29494] shadow-white'>
          Jazzmine
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#418fbf] shadow-white'>
          I'm a Cheer Professional.
        </h2>
        <p className='text-[#F2F2F2] py-4 max-w-[800px] text-xl'>
        Cheer private lesson coach, tumbling instructor, chorographer, routine consultant.
        </p>
        <div>
          <button className='text-white bg-[#F29494] group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#418fbf]'>
          <Link 
       
       to="work" 
       smooth={true} 
       duration={500} 
               >
       View Work
     </Link>
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;