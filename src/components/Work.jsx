import React from 'react';
import { data } from "../data/data.js";
import {FaGithub} from 'react-icons/fa'
import {CgWebsite} from "react-icons/cg"


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-300'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
            
  <div
    key={index}
    className="shadow-md shadow-[#040c16] rounded-lg h-{500px} hover:scale-110 duration-500"
  >
    <img className="border-4 border-blue-300 h-[250px]" src={item.image}/>
   
   <div className='bg-blue-300 text-white'>
  
      <p className='text-3xl text-center font-bold'>{item.name}</p>
      <br></br>
      <p>{item.caption}</p>
      <div className='bg-blue-500 inline-block p-3 m-2'>
      <a href= {item.github}>
        <button>
            <FaGithub />
        </button>
      </a>
      </div>
   
      <div className='bg-blue-500 inline-block p-3 m-1'>
      <a href= {item.live}>
        <button>
            <CgWebsite />
        </button>
      </a>
      </div>

      </div>
    
    </div>
    
   

))}


</div>
    
    </div>
    </div>
  );
};

export default Work;