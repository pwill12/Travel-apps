import React from 'react'
import Hero from '../Components/landing/hero'
import Services from '../Components/landing/services'
import StatsContainer from '../Components/landing/statscontainer'
import "../styles/landing.css"
import "../styles/options.css"
import AutocompleteInput from '../Components/autocomplete/Autocomplete'
import ResponsiveDatePickers from '../Components/dates/Date'
import Reviews from '../Components/landing/reviews'

function Landing() {
  return (
    <div className='landing-hero'>
      <Hero/>
      <StatsContainer/>
      <Services/>
      <Reviews/>
    </div>
  )
}

export default Landing