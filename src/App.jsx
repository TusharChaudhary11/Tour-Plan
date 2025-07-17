import React, { useState } from 'react'
import Tour from "./Component/Tour"
import Data from "./Component/Data"

function App() {
  const [tour, setTour] = useState(Data)

  function tourRemoveHandler(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    setTour(newTour)
  }

  // function refreshHandler() {
  //   setTour(Data)
  // }

  if (tour.length === 0) {
    return (
        <div className='refersh'>
          <h2 className='title2'> No Tours Left</h2>
          <button className='btn-white'
            onClick={() => setTour(Data)}>
            Refresh
          </button>
        </div>
    )
  }

  return (

    <div className='App'>
      <Tour tour={tour} tourRemoveHandler={tourRemoveHandler} />
    </div>

  )

}

export default App
