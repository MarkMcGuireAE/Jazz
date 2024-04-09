import React from 'react'
import {FaPhoneVolume} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[750px] bg-[#313640] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5eVYPOdE" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#418fbf] text-[#F29494] shadow-white'>Contact</p>
               <p className='text-2xl text-[#F2F2F2] py-4'> Text or Call - 937.234.7837</p>
                <p className='text-2xl text-[#F2F2F2] py-4'>Submit the form below or shoot me an email - JMcheervibes@gmail.com</p>
            </div>
            <input className='bg-[#F2F2F2] border-[#F29494] border-4 text-[#418fbf]  p-2 rounded-lg ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#F2F2F2] border-[#F29494] border-4  text-[#418fbf]   rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#F2F2F2] border-[#F29494] border-4  text-[#418fbf] p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-[#F29494] rounded-lg hover:bg-[#418fbf] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact