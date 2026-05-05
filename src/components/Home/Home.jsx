import React from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Section1/>
      <Section2/>
      <Section4/>
      <Section3/>
      <Testimonials/>
      <Section5/>
    </div>
  )
}

export default Home
