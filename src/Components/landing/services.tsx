import React from 'react'
import Image from "../../Images/city1.png"
import Button from '../Button'

const Services = () => {
  return (
    <div className='services px'>
      <h2 className='titles'>Best Top Prices</h2>
      <div className="services-wrapper ">
        <div className="card">
          <img src={Image} alt="image" />
          <p>From:  Aba, Asa Road<br />Local</p>
          <p>To:  Enugu, Okpara<br />Avenue</p>
          <div className='btncenters'>
            <Button value='Book now' class='btnwrapss' />
          </div>
        </div>
        <div className="card">
          <img src={Image} alt="image" />
          <p>From:  Aba, Asa Road<br />Local</p>
          <p>To:  Enugu, Okpara<br />Avenue</p>
          <div className='btncenters'>
            <Button value='Book now' class='btnwrapss' />
          </div>
        </div>
        <div className="card">
          <img src={Image} alt="image" />
          <p>From:  Aba, Asa Road<br />Local</p>
          <p>To:  Enugu, Okpara<br />Avenue</p>
          <div className='btncenters'>
            <Button value='Book now' class='btnwrapss' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
