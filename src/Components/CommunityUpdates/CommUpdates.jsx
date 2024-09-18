import React from 'react'
import HUcard from '../HomePageUpdatesCard/HUcard'
import update3 from "../../assets/update3.png"
import update2 from "../../assets/update2.png"
import update1 from "../../assets/update1.png"
import { motion } from 'framer-motion'
function CommUpdates() {
  return (
    <div className='mt-7 px-8 md:px-14 lg:px-28 flex flex-col gap-5'>
       <motion.div initial={{opacity:0,y:-50 }} whileInView={{opacity:1,y:0}} transition={{ duration:.5,type: "tween" }} viewport={{once:true}} className='flex flex-col items-center gap-3'>
            <h1 className='text-4xl font-bold'>Caring is the new marketing</h1>
            <p className='text-center'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
       </motion.div>
      <div className='flex flex-col lg:flex-row gap-5 items-center lg:justify-between'>
        <motion.div  initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10 }} ><HUcard img={update3} text={"Creating Streamlined Safeguarding Processes with OneRen"} /></motion.div>
        <motion.div  initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10 ,delay:.3}} ><HUcard img={update2} text={"What are your safeguarding responsibilities and how can you manage them?"} /></motion.div>
        <motion.div  initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10,delay:.6 }} ><HUcard img={update1} text={"Revamping the Membership Model with Triathlon Australia"} /></motion.div>
      </div>
    </div>
  )
}

export default CommUpdates