import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name='home' className='w-full h-[750px] bg-[#8b8b81cc]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#f2e3b3] text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f2695c] shadow-white'>
          Mark McGuire
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#418fbf] shadow-white'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#f2e3b3] py-4 max-w-[700px] text-xl'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white bg-[#418fbf] group border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-[#f2695c]'>
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