import React from 'react'
import community1 from "../../assets/community1.png"
import community2 from "../../assets/community2.png"
import community3 from "../../assets/community3.png"
import { motion } from 'framer-motion'
function CommunitySection() {
  return (
    <div className='mt-14 px-8 md:px-14 lg:px-28 flex flex-col gap-3'>
    <motion.div initial={{opacity:0,y:50 }} whileInView={{opacity:1,y:0}} transition={{ duration:.5,type: "tween" }} viewport={{once:true}} className='flex flex-col items-center gap-3'>
         <h1 className='text-4xl font-bold text-center flex flex-col items-center'>Manage your entire community <span>in a single system</span></h1>
         <p>Who is Nextcent suitable for?</p>
    </motion.div>
     <div className='flex lg:flex-row flex-col justify-between py-5 gap-3'>

        <motion.div   initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10 }} className='flex flex-col gap-5 items-center py-2 px-3 lg:w-1/3 w-full'>
                <img src={community1} alt='community1' className='h-20'/>
                <h1 className='font-bold text-center text-3xl flex flex-col items-center'><span>Membership</span><span>Organisations</span> </h1>
                <p className='text-center'>
                    Our membership management software provides full automation of membership renewals and payments
                </p>
         </motion.div>
         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10 , delay:.3 }} className='flex flex-col gap-5 items-center py-2 px-3 lg:w-1/3 w-full'>
                <img src={community2} alt='community2' className='h-20' />
                <h1 className='font-bold text-center text-3xl flex flex-col items-center'><span>National</span><span>Associations</span> </h1>
                <p className='text-center'>
                    Our membership management software provides full automation of membership renewals and payments
                </p>
         </motion.div>
         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once:true}} transition={{ duration: 0.5,type: "spring", stiffness: 100,damping: 10, delay:.6 }} className='flex flex-col gap-5 items-center py-2 px-3 lg:w-1/3 w-full'>
                <img src={community3} alt='community3' className='h-20'/>
                <h1 className='font-bold text-center text-3xl flex flex-col items-center'><span>Clubs And</span><span>Groups</span> </h1>
                <p className='text-center'>
                    Our membership management software provides full automation of membership renewals and payments
                </p>
         </motion.div>
       
     </div>
 </div>
  )
}

export default CommunitySection