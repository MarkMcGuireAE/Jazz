import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[750px] bg-[#8b8b81cc] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/5eVYPOdE" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#418fbf] text-[#f2e3b3] shadow-white'>Contact</p>
                <p className='text-2xl text-[#f2e3b3] py-4'>Submit the form below or shoot me an email - Mark.McGuire44@gmail.com</p>
            </div>
            <input className='bg-[#418fbf] text-[#f2e3b3] border-2 p-2 rounded-lg ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#418fbf] text-[#f2e3b3] border-2  rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#418fbf] text-[#f2e3b3] border-2 p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-[#418fbf] rounded-lg hover:bg-[#d9583b] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact