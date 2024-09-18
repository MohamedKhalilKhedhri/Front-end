import React from 'react'
import customer from "../../assets/cust.png"
import ClientsLogos from '../ClientsLogos/ClientsLogos'
import { motion } from 'framer-motion'
function Customers() {
  return (
    <div className='mt-14 px-8 md:px-14 lg:px-28 flex gap-5 items-center'>
        <motion.img  initial={{opacity:0,scale:.6 }} whileInView={{opacity:1,scale:1}} transition={{ duration:.5,type: "spring", stiffness: 100,damping: 10, }} viewport={{once:true}}  src={customer} alt='img' className='xl:w-[600px] md:w-[350px] hidden md:block' />
        <motion.div initial={{opacity:0,x:-50 }} whileInView={{opacity:1,x:0}} transition={{ duration:.5,type: "tween" }} viewport={{once:true}} className='flex flex-col gap-3 flex-1'>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h1 className='font-bold text-xl text-accent'>Tim Smith</h1>
            <p>British Dragon Boat Racing Association</p>
            <div className='flex sm:flex-row flex-col gap-3 justify-center sm:items-center'>
                <div className='flex-1'><ClientsLogos /></div>
                <a href='' className='link-accent'>Meet all Customers -&gt;</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Customers