import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/NavBar/Nav'
import MainSection from './Components/MainSection/MainSection'
import OurClients from './Components/OurClients/OurClients'
import CommunitySection from './Components/CommunitySection/CommunitySection'
import LearnSection from './Components/LearnMoreSection/LearnSection'
import frame1 from './assets/Frame 35.png'
import pana from './assets/pana.png'
import Achievements from './Components/Achievements/Achievements'
import Customers from './Components/Customers/Customers'
import CommUpdates from './Components/CommunityUpdates/CommUpdates'
import Footer from './Components/Footer/Footer'
function App() {
 
  return (
    <>
      <Nav/>
      <MainSection />
      <OurClients />
      <CommunitySection />
      <LearnSection img={frame1} title={"The unseen of spending three years at Pixelgrade"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."} />
      <Achievements />
      <LearnSection img={pana} title={"How to design your site footer like we did"} text={"Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."} />
      <Customers/>
      <CommUpdates />

      <div className='mt-24 flex flex-col gap-10 items-center'>
          <h1 className='text-6xl font-bold flex flex-col gap-2 text-center'>Pellentesque suscipit <span>fringilla libero eu.</span></h1>
          <a className='btn btn-accent' href='#'>Get Demo -&gt;</a>
      </div>
      <Footer />
    </>
  )
}

export default App
