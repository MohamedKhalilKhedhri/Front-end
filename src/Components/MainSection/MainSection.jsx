import React from 'react'
import illustration from "../../assets/Illustration.svg"
import { motion } from "framer-motion"
function MainSection() {
  return (
    <div className='h-screen px-8 md:px-14 lg:px-28  py-16 md:py-8 mt-[64px]  flex lg:flex-row flex-col md:justify-evenly lg:justify-between items-center '>
      <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{ duration:.5,type: "spring", stiffness: 100,damping: 10, }} className='flex flex-col gap-6'>
        <h1 className='text-6xl flex flex-col font-bold'>Lessons and insights <span className='text-accent'>from 8 years</span></h1>
        <p className='text-base-content'>Where to grow your business as a photographer: site or social media?</p>
        <a className='btn btn-wide btn-accent' href=''>Register</a>
      </motion.div>
      <motion.img src={illustration}  initial={{opacity:0,scale:.6 }} animate={{opacity:1,scale:1}} transition={{ duration:.5,type: "spring", stiffness: 100,damping: 10, }}  className='lg:w-[460px] w-72 hidden sm:block  sm:self-end  lg:self-auto ' alt='mainview'  />

    </div>
  )
}

export default MainSection