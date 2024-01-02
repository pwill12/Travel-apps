import "../styles/routes.css";
import Buses from "../Components/Buses";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Routess() {

  const [bus, setbus] = useState<[]>([])

  const busdata = useLocation()
  const from = busdata.pathname.split("/")[2];
  const input2 = busdata.pathname.split("/")[3];
  const date1 = busdata.pathname.split("/")[4];
  const date2 = busdata.pathname.split("/")[5];

  useEffect(() => {
    const getbus = async () => {
      try {
        const res = await axios.get(
          from !== undefined && input2 !== undefined && date1 !== null && date2 !== null
          ?
          `https://travel-api-will.onrender.com/api/findbus?from=${from}&to=${input2}&depart=${date1}&return=${date2}`
          : "https://travel-api-will.onrender.com/api/findbus"
        );
        setbus(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getbus();
  }, [from !== undefined && input2 !== undefined && date1 !== null && date2 !== null])

  return (
    <div className="route-page ">
      {bus?.length !== 0 ?
        <div className="route-page">
          <div className="routes-container px">
            <div className="routescon">
              <div className="routes">
                <h1>Routes</h1>
                <p>Date: Fri Oct 06 2023</p>
              </div>
              <div className="passengers px">
                <p className="passengerx">No of passengers: 1</p>
              </div>
            </div>
            <button className="modify">Modify Search</button>
          </div>
          <div className="px available-wrapper">
            <h3 className="av">Here are available routes</h3>
            <Buses data={bus}/>
          </div>
        </div>
      : <p style={{margin: '175px',color: 'red',textAlign: 'center'}}>No available bus</p>}
    </div>
  );
}

export default Routess;
