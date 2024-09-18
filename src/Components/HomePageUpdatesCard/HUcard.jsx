import React from 'react'

function HUcard(props) {
  return (
    <div className='relative'>
    <img  src={props.img} alt='img' className='w-96' />
    <div className='bg-base-100 p-4 w-72 h-36 flex flex-col  justify-center items-center  left-1/2 -translate-x-1/2 absolute -bottom-9 rounded-sm shadow-md' >
      <p className='text-center'>{props.text}</p>
      <a href='#' className='link-accent'>read more -&gt;</a>
    </div>
  </div>
  )
}

export default HUcard