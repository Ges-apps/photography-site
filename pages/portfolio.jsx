import React from 'react'
import Hero from '../components/Hero'
import Portfolios from '../components/Portfolios'

const Work = () => {
  return (
    <div>
      <Hero heading='My Works' message='These are some of my best works'/>
      <Portfolios />
    </div>
  )
}

export default Work