import React from 'react'
import { motion } from 'framer-motion'
function LearnSection(props) {
  return (
    <div className='mt-14 px-8 md:px-14 lg:px-28 flex gap-5 items-center'>
        <motion.img  initial={{opacity:0,scale:.6 }} whileInView={{opacity:1,scale:1}} transition={{ duration:.5,type: "spring", stiffness: 100,damping: 10, }} viewport={{once:true}} src={props.img} alt='img' className='xl:w-[600px] md:w-[350px] hidden md:block' />
        <div className='flex flex-col gap-3 flex-1'>
            <motion.h1  initial={{opacity:0,y:-50 }}  whileInView={{opacity:1,y:0}} transition={{ duration:.5,delay:.5,type: "spring", stiffness: 100,damping: 20, }} viewport={{once:true}}  className='font-bold text-3xl'>{props.title}</motion.h1>
            <motion.p  initial={{opacity:0,y:-50 }}  whileInView={{opacity:1,y:0}} transition={{ duration:.5,delay:.8,type: "spring", stiffness: 100,damping: 20, }} viewport={{once:true}} >{props.text}</motion.p>
            <motion.a  initial={{opacity:0,y:-50 }}  whileInView={{opacity:1,y:0}} transition={{ duration:.5,delay:1.1,type: "spring", stiffness: 100,damping: 20, }} viewport={{once:true}}  className='btn btn-accent btn-wide' href='#'>Learn More</motion.a>
        </div>
    </div>
  )
}

export default LearnSection