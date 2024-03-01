import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-[750px] bg-[#8b8b81cc] text-[#f2e3b3]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-[#f2e3b3] font-bold inline border-b-4 border-[#418fbf] shadow-white'>
              About
            </p>
          </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          
          
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-[#d9583b] sm:text-right text-4xl font-bold  shadow-white'>
              <p>Hi. I'm Mark McGuire, </p>
              <p>nice to meet you. </p>
                <p className='text-[#418fbf]  shadow-white'>Please take a look around.</p>
            </div>
            <div>
              <p className='text-xl'>A dynamic career changer transitioning from a successful tenure in high-level financial services sales and management to pursue a passion for software engineering. Leveraging my experience in managing financial professionals and driving sales, I recently graduated from a rigorous full stack developer bootcamp, where I completed several real-world projects. I bring a unique blend of technical acumen and business understanding to every project. With a proven track record of meeting deadlines, problem-solving, and fostering collaborative team environments, I am poised to contribute effectively to innovative software development initiatives.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;