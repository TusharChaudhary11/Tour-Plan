import React from 'react'
import Card from "./Card"
import '../App.css'

function Tour({ tour, tourRemoveHandler }) {
    return (
        <div className='container'>

            <div className=''>
                <h1 className='title'>Plan Your Tour</h1>
            </div>

            <div className='cards'>
                {tour.map((tours) => {
                    return <Card key={tours.id} {...tours} tourRemoveHandler={tourRemoveHandler} />
                })}
            </div>

        </div>
    )
}

export default Tour