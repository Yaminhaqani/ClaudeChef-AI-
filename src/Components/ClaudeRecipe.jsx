import React from 'react'
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = (props) => {
  return (
    <>
    <section className='text-[#475467] leading-[28px] text-[1.125rem] font-[400] mt-16' aria-live='polite'>
       <div ref={props.scrollTargetRef}></div>
      <h2 className='text-xl font-bold text-black'>Claude Chef Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
      <h3 className='text-center mt-8 font-light'>Thanks for using ClaudeChef!</h3>
    </section>
    </>
  )
}

export default ClaudeRecipe