import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-[750px] bg-[#313640] text-[#F2F2F2]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-[#F29494] font-bold inline border-b-4 border-[#418fbf] shadow-white'>
              About
            </p>
          </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-[#F29494] sm:text-right text-4xl font-bold  shadow-white'>
              <p>Hi. I'm Jazzmine, </p>
            
                <p className='text-[#418fbf]  shadow-white'>Join me as we tumble, Cheer, and soar together!</p>
            </div>
            <div>
              <p className='text-xl'>
My life has been centered around the thrilling world of cheerleading for as long as I can remember. With over a decade of experience as both an athlete and coach, including competing at the varsity and collegiate levels, I've honed my skills and soared to new heights. As a tumbling instructor, I've guided aspiring athletes through the intricate techniques that define these sports. My coaching journey has led teams to excellence at events like the UCA Nationals, while my choreography expertise has crafted captivating routines for diverse squads. Beyond the sidelines, I've dedicated myself to spreading the joy and athleticism of cheerleading and gymnastics through community involvement, conducting clinics and teaching classes to eager learners from various backgrounds.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;