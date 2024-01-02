import React, { useEffect, useState } from 'react'
import Button from './Button'
import fill from "../Images/person-fill.png"
import wrapper from "../Images/icon-wrapper.png";
import recordcircle from "../Images/record-circle.png"
import vectors from "../Images/vectors.png"
import iconwrapper from "../Images/iconwrapper.png";
import AutocompleteInput from './autocomplete/Autocomplete';
import ResponsiveDatePickers from './dates/Date';
import { BsPerson } from 'react-icons/bs';
import { Box, Divider, TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import axios from 'axios';
import { Link } from 'react-router-dom';


const HeroForms = () => {
    const [datas, setdata] = useState(0);
    const [openOptions, setOpenOptions] = useState(false);
    const [opentab, setopentab] = useState(false);
    const [from, setinput1] = React.useState<string | null>(null);
    const [input2, setinput2] = React.useState<string | null>(null);
    const [date1, setdate1] = React.useState<Dayjs | null>(null);
    const [date2, setdate2] = React.useState<Dayjs | null>(null);
    const [bus, setbus] = React.useState<[] | null>(null);
    const [data3, setdata3] = React.useState(false);


    const handleoption = () => {
        setOpenOptions(!openOptions)
    };

    useEffect(() => {
        const getbus = async () => {
            try {
                if (from !== null && input2 !== null && date1?.format().slice(0,10) !== null && date2?.format().slice(0,10) !== null) {
                    const res = await axios.get(
                    `https://travel-api-will.onrender.com/api/findbus?from=${from}&to=${input2}&depart=${date1?.format().slice(0, 10)}&return=${date2?.format().slice(0, 10)}`
                )
                if (res.data?.message === 'No data found') {
                    setdata3(true)
                    setbus([])
                }else if (res.data?.length > 0) {
                setbus(res.data)
                setdata3(false)
                }
                }

            } catch (err) {
                console.log(err);
            }
        };
        getbus();
    }, [from,input2,date1?.format().slice(0,10),date2?.format().slice(0,10)])

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    console.log(bus,data3)

    return (
        <div className='form'>
            <div>
                <div className='tabmenu'>
                    <div className={opentab === false ? 'tabs' : ''} onClick={() => setopentab(false)}>Book a seat</div>
                    <div className={opentab === true ? 'tabs' : ''} onClick={() => setopentab(true)}>Booking status</div>
                </div>
                {opentab === false &&
                    <div className="container">
                        <h2 >Let's help you find your trip</h2>
                        <div className='ways'>
                            <p className='on-way active'>On way</p>
                            <p className='on-way'>Round trip</p>
                            <span className=''><img src={fill} alt="fill" onClick={handleoption}></img>{datas}</span>
                            <img src={wrapper} alt="wrapper" onClick={handleoption}></img>
                            {openOptions &&
                                <div className='Openoptions'>
                                    <div className='Opencon' onClick={(e: any) => setdata(1)}>
                                        <BsPerson />
                                        <p onClick={(e: any) => setdata(1)}>1</p>
                                    </div>
                                    <Divider />
                                    <div className='Opencon' onClick={(e: any) => setdata(2)}>
                                        <BsPerson />
                                        <p onClick={(e: any) => setdata(2)}>2</p>
                                    </div>
                                    <Divider />
                                    <div className='Opencon' onClick={(e: any) => setdata(3)}>
                                        <BsPerson />
                                        <p>3</p>
                                    </div>
                                    <Divider />
                                    <div className='Opencon' onClick={(e: any) => setdata(4)}>
                                        <BsPerson color='dark' />
                                        <p>4</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="grids">
                            <div className="grid">
                                <p>From</p>
                                <div className="input">
                                    <AutocompleteInput setinput={setinput1} />
                                </div>
                            </div>
                            <div className="grid">
                                <p>To</p>
                                <div className="input">
                                    <AutocompleteInput setinput={setinput2} />
                                </div>
                            </div>
                            <div className="grid">
                                <p>Departure</p>
                                <ResponsiveDatePickers setdate={setdate1} />
                            </div>
                            <div className="grid">
                                <p>Return</p>
                                <ResponsiveDatePickers setdate={setdate2} />
                            </div>
                            <button className='btnWrap'>
                                <Link to={'/route'+'/'+from+'/'+input2+'/'+date1?.format().slice(0,10)+'/'+date2?.format().slice(0,10)}>
                                    {bus ? bus?.length + " " + 'ride is available' : data3 ? 'no available' : 'Search Bus'}
                                </Link>
                            </button>
                        </div>
                    </div>
                }
                {opentab &&
                    <div className='item2'>
                        <div className='itemwrap'>
                            <h3>Insert your booking code</h3>
                            <div>
                                <TextField
                                    margin="normal"
                                    // required
                                    fullWidth
                                    id="email"
                                    label="Booking Status"
                                    sx={{ marginTop: '20px' }}
                                    // name="email"
                                    // autoComplete="email"
                                    autoFocus
                                />
                            </div>

                            <div className='btncenter'>
                                <Button value='search' class='btnwraps' />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeroForms