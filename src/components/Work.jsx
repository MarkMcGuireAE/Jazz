import React from 'react';
import { data } from "../data/data.js";
import Services from '../assets/resume.jpg';
import {FaGithub} from 'react-icons/fa'
import {CgWebsite} from "react-icons/cg"


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full min-h-[850px] text-[#594b20] bg-[#313640]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-[#F29494] border-[#418fbf] shadow-white'>
            Experience
          </p>
        
        </div>

        <img className='mx-auto' src={Services} alt="Logo Image" style={{width: "700px"}} />


</div>
    
    </div>
    
  );
};

export default Work;