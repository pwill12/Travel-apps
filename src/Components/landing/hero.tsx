import React from 'react'
import People from "../../Images/People.png"
import HeroForms from '../HeromForms'
const Hero = () => {
  return (
    <div className='hero-wrapper px'>
      <div className="left">
        <img src={People} alt="heroImage" className='imgg'/>
        <div className="content">
            <h1><span>Inter</span>-travel</h1>
            <p>Search, compare and book <span>reliable</span> interstate bus routes in <b>Nigeria</b></p>
        </div>
      </div>
      <div className="right">
        <HeroForms/>
      </div>
    </div>
  )
}

export default Hero
