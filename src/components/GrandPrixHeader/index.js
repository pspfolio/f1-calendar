import React from 'react'
import './GrandPrixHeader.css'

export default ({ raceLocation, circuitName }) => (
  <div className='header-preview'>
    <div className='flex-container flex-column'>
      <div className='flex-item'>
        <h1 id='race-country'>{ raceLocation }</h1>
      </div>
      <div id='race-header' className='flex-item'>
        <h3 className='zero-margin light-text'>{ circuitName }</h3>
      </div>
    </div>
  </div>
)
