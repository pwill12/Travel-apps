import React from 'react'
import Pickuptable from '../Components/PickupData'
import "../styles/pickup.css"

function Pickup() {
  return (
    <div className="pickup">
      <div className="stationcon">
        <div className="station">
            <h1>Pickup Station</h1>
        </div>
        <div className='pickupright'>
        <input
            placeholder="Search"
          />
        <button className="modify">Modify Search</button>
        </div>
      </div>
      <div className="pickuptable">
        <Pickuptable/>
      </div>
    </div>
  )
}

export default Pickup
