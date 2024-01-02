import React from 'react'
import "../styles/routes.css";
import ImageL from "../Images/image.png";
import { LiaDotCircleSolid } from "react-icons/lia";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsCalendarCheck } from "react-icons/bs";
import Button from "../Components/Button";

type busdata = {
  _id: number
  ac: boolean
  amount: number
  bus: string
  from: string
  to: string
  depart: string
  return: string
  seats: number
}
type busprops = {
  data: busdata[]
}
function Buses({ data }: busprops) {
  return (
    <>
      {data?.length !== 0 && data.map((props,i) => (
        <div className="available-routes" key={i}>
          <div className="dash-available image">
            <img src={ImageL} alt="" />
          </div>
          <div className="dash-available">
            <div className="title">
              <h2>{props.bus} Bus</h2>
              <span>A/C/BUS</span>
            </div>
            <div className="details">
              <div className="detail-container">
                <div className="sub-title">
                  <LiaDotCircleSolid />
                  <span>From: </span>
                </div>
                <p>{props.from}</p>
              </div>
              <div className="detail-container">
                <div className="sub-title">
                  <MdOutlineLocationOn />
                  <span>To: </span>
                </div>
                <p>{props.to}</p>
              </div>
            </div>
          </div>
          <div className="dash-available cols">
            <div className="item">
              <h6>Boarding Date</h6>
              <div className="flex">
                <BsCalendarCheck />
                <p>6th Oct, 2023</p>
              </div>
            </div>
            <div className="item">
              <h6>Boarding Date</h6>
              <div className="flex">
                <BsCalendarCheck />
                <p>6th Oct, 2023</p>
              </div>
            </div>
          </div>
          <div className="dash-availables">
            <h4>Availabale seats</h4>
            <h3>16 seat(s) remaining</h3>
          </div>
          <div className="dash-available end">
            <div className='endtitle'>
              <TbCurrencyNaira />
              <h2>{props.amount}</h2>
            </div>
            <Button value="select seat" class="primBtn" />
          </div>
        </div>
      ))}
    </>
  )
}

export default Buses
