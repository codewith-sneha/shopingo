import React from 'react'
import HeroSlider from '../component/HeroSlider'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home