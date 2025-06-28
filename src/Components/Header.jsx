import React from 'react'
import ChefLogo from '../assets/ChefLogo.png';


const Header = () => {
  return (
    <div className='w-full h-[80px] bg-gradient-to-r from-[#fef9f0] to-[#d9c3b0] border border-gray-300 shadow-lg flex justify-center items-center rounded-t-lg'>
<img className='h-full' src={ChefLogo} alt="" />
<h2 className='text-2xl font-roboto'>ClaudeChef</h2>
    </div>
  )
}

export default Header