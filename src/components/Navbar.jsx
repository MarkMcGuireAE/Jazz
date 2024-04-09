import React from 'react'
import Logo from "../assets/jazzlogo.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react'
import { MdOutlineSportsGymnastics } from "react-icons/md";
import Resume from "../assets/resume.pdf"
import Services from "../assets/services.pdf"
import { Link } from "react-scroll"

const Navbar = () => {

    let [nav, SetNav] = useState(false)
    const handleClick = () => {
        SetNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#313640] text-[#F29494] font-bold rounded-lg '>
     
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "80px"}} />
           
            
        </div>
        <div className='pl-96 hidden md:flex'>
        
        <p>Call or Text 937.234.7837</p>
        </div>
        

        {/* //Menu */}

           
            <ul className='hidden md:flex' >
                <li>
                <Link 
       
      to="home" 
      smooth={true} 
      duration={500} 
              >
      Home
    </Link>
                  </li>
                <li>
                <Link 
       
       to="about" 
       smooth={true} 
       duration={500} 
               >
       About
     </Link>
     </li>
                
                <li>
                <Link 
       
       to="work" 
       smooth={true} 
       duration={500} 
               >
       Experience
     </Link>
     </li>
     <li>
                <Link 
       
       to="skills" 
       smooth={true} 
       duration={500} 
               >
       Services
     </Link>
    </li>
                <li>
                <Link 
       
       to="contact" 
       smooth={true} 
       duration={500} 
               >
       Contact
     </Link>
     </li>
            </ul>
            

            {/* {Hamburger} */}

            <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* //Mobile Menu */}
            <ul 
            className={ 
                !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#418fbf] flex flex-col justify-center items-center"

            }
            >
                <li  className='py-6 text-4xl'>
                <Link onClick={handleClick}
       
      to="home" 
      smooth={true} 
      duration={500} 
              >
      Home
    </Link>
                  </li>
                  <li  className='py-6 text-4xl'>
                <Link onClick={handleClick}
       
       to="about" 
       smooth={true} 
       duration={500} 
               >
       About
     </Link>
     </li>
     <li  className='py-6 text-4xl'>
                <Link onClick={handleClick}
       
       to="work" 
       smooth={true} 
       duration={500} 
               >
      Experience
     </Link>
     </li>
     <li  className='py-6 text-4xl'>
                <Link onClick={handleClick}
       
       to="skills" 
       smooth={true} 
       duration={500} 
               >
       Services
     </Link>
    </li>
    
     <li className='py-6 text-4xl'>
                <Link onClick={handleClick}
       
       to="contact" 
       smooth={true} 
       duration={500} 
               >
       Contact
     </Link>
     </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0  '>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center rounded-lg ml-[-100px] hover:ml-[-10px] duration-300 bg-[#418fbf]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='mailto:jazzmine.mcguire@yahoo.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
                  
          <li className='w-[160px] h-[60px] flex justify-between items-center rounded-lg ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F29494]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={Services}
            >
              Services <MdOutlineSportsGymnastics  size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center rounded-lg ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181B59]'>
            <a
              className='flex justify-between items-center w-full text-white'
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
                </li>
            </ul>

            </div>



    </div>
  )
}

export default Navbar