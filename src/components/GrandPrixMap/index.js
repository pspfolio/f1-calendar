import React from 'react'
import './GrandPrixMap.css'

export default ({ circuitId }) => (
  <section className='flex-container'>
    <div className='flex-item'>
      <h2 className='gp-header'>Racetrack</h2>
      <img className='map-image' src={`../src/images/tracks/${circuitId}.svg`} />
    </div>
  </section>
)
