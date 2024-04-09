import React from 'react';
import { data } from "../data/data.js";
import ServicesRes from '../assets/resume.jpg';
import {FaGithub} from 'react-icons/fa'
import {CgWebsite} from "react-icons/cg"

import Services from '../assets/Services.jpg';

const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    
    <div name='skills' className='w-full max-h-[3200px] bg-[#313640] text-[#F29494]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center'>
              <p className='text-4xl font-bold inline border-b-4 border-[#418fbf] shadow-white '>Services</p>
              <p className='py-4 text-2xl text-[#F2F2F2]'></p>
          </div>
<div className='mx-auto'>
          <img className='mx-auto' src={Services} alt="Logo Image" style={{width: "700px"}} />
          </div>
</div>
<br></br>
            <br></br>
    </div>
    
  );
};

export default Work;