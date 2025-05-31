import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[80px] bg-white border border-gray-300 shadow-md flex justify-center items-center rounded-t-lg'>
<img className='h-full' src="../src/assets/ChefLogo.png" alt="" />
<h2 className='text-2xl font-roboto'>ClaudeChef</h2>
    </div>
  )
}

export default Header