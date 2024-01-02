import React from 'react'
import Image from "../../Images/nahid.png"
import Image2 from "../../Images/nahid2.png"
import Image3 from "../../Images/nahid3.png"

import { Rating } from '@mui/material'

export default function Reviews() {
    return (
        <div className='review-container px'>
            <h2>see why users across Nigeria love Godaesil Motors</h2>
            <div className='reviews-card'>
                <div className='reviews-cards'>
                    <img src={Image} alt="image" />
                    <h3>Laura Simpson</h3>
                    <Rating name="read-only" value={4} readOnly />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea quae nemo cum numquam aliquam?</p>
                    <h4>1 day ago</h4>
                </div>
                <div className='reviews-cards'>
                    <img src={Image2} alt="image" />
                    <h3>Laura Simpson</h3>
                    <Rating name="read-only" value={4} readOnly />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea quae nemo cum numquam aliquam?</p>
                    <h4>1 day ago</h4>
                </div>
                <div className='reviews-cards'>
                    <img src={Image3} alt="image" />
                    <h3>Laura Simpson</h3>
                    <Rating name="read-only" value={4} readOnly />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea quae nemo cum numquam aliquam?</p>
                    <h4>1 day ago</h4>
                </div>
            </div>
        </div>
    )
}
