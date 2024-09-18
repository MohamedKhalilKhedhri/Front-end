import React from 'react'

function AchInfo(props) {
  return (
    <div className='flex gap-4 items-center'>
        <img src={props.img} alt={props.title} />
        <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-bold'>{props.number}</h1>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default AchInfo