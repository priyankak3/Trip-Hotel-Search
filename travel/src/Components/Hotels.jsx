import React from 'react'
import BestPlaces from './BestPlaces'
import MainHotel from './MainHotel'
import Navbar from './Navbar'

const Hotels = () => {
  return (
    <div className='hotels-page'>
    <Navbar/>
    <MainHotel/>
    <BestPlaces/>
    </div>
  )
}

export default Hotels