import React from 'react'
import AchInfo from '../AchievementsInfos/AchInfo'
import Icon  from "../../assets/Icon.png"
import Icon1  from "../../assets/Icon (1).png"
import Icon2  from "../../assets/Icon (2).png"
import Icon3  from "../../assets/Icon (3).png"
import { motion } from 'framer-motion'
function Achievements() {
  return (
    <div className='mt-14 px-8 md:px-14 lg:px-28 flex flex-col lg:flex-row lg:items-center gap-5'>
        <motion.div initial={{opacity:0,x:-50 }} whileInView={{opacity:1,x:0}} transition={{ duration:.5,type: "tween" }} viewport={{once:true}} className='flex flex-col gap-2 flex-1 lg:self-center'>
                <h1 className='font-bold text-4xl'>Helping a local</h1>
                <h1 className='font-bold text-4xl text-accent'>business reinvent itself</h1>
                <p className=''>We reached here with our hard work and dedication</p>

        </motion.div>
        <div className='grid  grid-cols-1 sm:grid-cols-2  items-center justify-center flex-1 gap-11'>
                <AchInfo img={Icon} title={"Members"} number={"2,245,341"} />
                <AchInfo img={Icon1} title={"Clubs"} number={"46,328"} />
                <AchInfo img={Icon2} title={"Event Bookings"} number={"828,867"} />
                <AchInfo img={Icon3} title={"Payments"} number={"1,926,436"} />
        </div>
    </div>
  )
}

export default Achievements