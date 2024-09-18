import React from 'react'
import c1 from "../../assets/c1.PNG"
import c2 from "../../assets/c2.PNG"
import c3 from "../../assets/c3.PNG"
import c4 from "../../assets/c4.PNG"
import c5 from "../../assets/c5.PNG"
import c6 from "../../assets/c6.PNG"
import c7 from "../../assets/c7.PNG"
import { motion } from 'framer-motion'
function ClientsLogos() {
  return (
    <div className='flex justify-between py-5'>
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: .3 }}
      src={c1} alt='c1' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: .5 }}
      src={c2} alt='c2' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: .7 }}
      src={c3} alt='c3' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: .9 }}
      src={c4} alt='c4' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: 1 }}
      src={c5} alt='c5' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: 1.2 }}
      src={c6} alt='c6' className='w-11' 
    />
    <motion.img 
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{once:true}} 
      transition={{ duration: 0.5, delay: 1.4 }}
      src={c7} alt='c7' className='w-11' 
    />
  </div>
  )
}

export default ClientsLogos