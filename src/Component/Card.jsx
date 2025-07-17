import React from 'react'
import { useState } from 'react'
import '../App.css'

function Card({ id, image, cityName, price, info, tourRemoveHandler }) {

    const [readMore, setReadMore] = useState(false)
    const description = readMore ? info : `${info.substring(0, 100)}...`

    const moreLessHandler = () => {
        setReadMore(!readMore)
    }

    return (

        <div className='card'>

            <div>
                <img className='image' src={image} alt="tour-img" />
            </div>

            <div className='tour-info'>
                <div className='tour-detail'>
                    <h4 className='tour-price'> ₹ {price} </h4>
                    <h4 className='tour-name'> {cityName} </h4>
                </div>
                <div className='description'>
                    {description}
                    <span
                        className='readmore'
                        onClick={moreLessHandler}>
                        {readMore ? " Show Less" : "Read More"}
                    </span>
                </div>
            </div>
            <button
                className='btn-red'
                onClick={() => tourRemoveHandler(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card