import React from 'react';
import { data } from "../data/data.js";
import {FaGithub} from 'react-icons/fa'
import {CgWebsite} from "react-icons/cg"


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full min-h-[850px] text-[#594b20] bg-[#8b8b81cc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-[#f2e3b3] border-[#418fbf] shadow-white'>
            Work
          </p>
          <p className='py-6 text-2xl text-[#f2e3b3]'>Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
            
  <div
    key={index}
    className="shadow-md shadow-[#594b20] bg-[#418fbf]  rounded-lg  h-[550px] text-[#f2e3b3]  hover:scale-110 duration-500"
  >
    <img className="border-4 border-[#418fbf] h-[250px] rounded" src={item.image}/>
   
   
  
      <p className='text-3xl text-center font-bold'>{item.name}</p>
      <br></br>
      <p className='h-[185px] p-4 '>{item.caption}</p>
      
      <a href= {item.github}>
        <button className='bg-[#d9583b] inline-block p-3 m-3  text-white rounded-md'>
            <FaGithub />
        </button>
      </a>
     
   
    
      <a href= {item.live}>
        <button className='bg-[#d9583b] inline-block p-3 m-1 text-white rounded-md'>
            <CgWebsite />
        </button>
      </a>
    

      
    
    </div>
    
   

))}


</div>
    
    </div>
    </div>
  );
};

export default Work;