import React from 'react'
import "../styles/about.css"
import Group from "../Images/Group.png";
import Group1 from "../Images/Group1.png";
import Group2 from "../Images/Group2.png";
import Reviews from '../Components/landing/reviews';

function About() {
  return (
    <div className='about-container px'>
    <div className='about-us'>
    <div className='about-header'>
        <h1><span>WHO</span> WE ARE</h1>
        <p>Number one secure booking platform for people traveling or sending 
        <br></br>parcels across cities in Nigeria.We help transport companies sell 
        <br></br>bus tickets and added services</p>
    </div>
    <div className='about-impact px' >
    <div className='about-row'>
    <img src={Group} alt="group" />
    <h1>Our Mission</h1>
    <p className='row-par'>A dynamic service <br />
     organization that provides<br />
    timely transportation and<br />
    logistics solutions with the <br />
    highest level of excellence <br />
    and customer satisfaction, <br />
    as well as exceptional <br />
    safety, comfort, and <br />
    economic value to our <br />
    customers and partners.</p>

    </div>
    <div className='about-row'>
    <img src={Group1} alt="group" />
    <h1 className='vision'>Our Vision</h1>
    <p className='row-par'>A dynamic service <br />
     organization that provides<br />
    timely transportation and<br />
    logistics solutions with the <br />
    highest level of excellence <br />
    and customer satisfaction, <br />
    as well as exceptional <br />
    safety, comfort, and <br />
    economic value to our <br />
    customers and partners.</p>

    </div>
    <div className='about-row'>
    <img src={Group2} alt="group" />
    <h1 className='value'>Our Value</h1>
    <p className='row-par'>A dynamic service <br />
     organization that provides<br />
    timely transportation and<br />
    logistics solutions with the <br />
    highest level of excellence <br />
    and customer satisfaction, <br />
    as well as exceptional <br />
    safety, comfort, and <br />
    economic value to our <br />
    customers and partners.</p>

    </div>
    </div>

    </div>
    <Reviews/>

    </div>
  )
}

export default About
