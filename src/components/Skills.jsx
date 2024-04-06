import React from 'react';

import Services from '../assets/Services.jpg';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-[3200px] bg-[#313640] text-[#F29494]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center'>
              <p className='text-4xl font-bold inline border-b-4 border-[#418fbf] shadow-white '>Services</p>
              <p className='py-4 text-2xl text-[#F2F2F2]'></p>
          </div>

          <div className='mx-auto'>
          <img src={Services} alt="Logo Image" style={{width: "700px"}} />
          </div>
      </div>
    </div>
  );
};

export default Skills;