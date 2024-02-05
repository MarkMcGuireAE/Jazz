import React from 'react'
import Logo from "../assets/logo.png"
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'}

const Nav = () => {

    let [nav, SetNav] = useState(false)
    const handleClick = () => {
        SetNav(!nav)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "80px"}} />
        </div>

        {/* //Menu */}

           
            <ul className='hidden md:flex' >
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contacts</li>
            </ul>
            

            {/* {Hamburger} */}

            <div onClick={handleClick} className='md:hidden z-10'>
                <FaBars />
            </div>

            {/* //Mobile Menu */}
            <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contacts</li>
            </ul>

            {/* //Social Icons */}



    </div>
  )
}

export default Nav