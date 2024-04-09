import React from 'react';

import Services from '../assets/Services.jpg';

import ServicesRes from '../assets/resume.jpg';

const Skills = () => {
  return (

    <div name='work' className='w-full max-h-[3200px] text-[#594b20] bg-[#313640]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8 text-center'>
        <p className='text-4xl font-bold inline border-b-4 text-[#F29494] border-[#418fbf] shadow-white'>
          Experience
        </p>
      
      </div>
 

          <div className='mx-auto'>
          <img className='mx-auto' src={ServicesRes} alt="Logo Image" style={{width: "700px"}} />
          </div>
          <br></br>
            <br></br>
      </div>
    </div>
  );
};

export default Skills;