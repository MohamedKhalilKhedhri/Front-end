import React from 'react'
import ClientsLogos from '../ClientsLogos/ClientsLogos'
import { motion } from "framer-motion"
function OurClients() {
  return (
    <div className='mt-7 px-8 md:px-14 lg:px-28 flex flex-col gap-5'>
       <motion.div initial={{opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration:.5,type: "tween" }} viewport={{once:true}} className='flex flex-col items-center gap-3'>
            <h1 className='text-4xl font-bold' >Our Clients</h1>
            <p className='text-center'>We have been working with some Fortune 500+ clients</p>
       </motion.div>
       <ClientsLogos />
    </div>
  )
}

export default OurClients