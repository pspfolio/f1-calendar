import React from 'react'
import './GrandPrixHeader.css'

export default ({ raceLocation, circuitName, racedate }) => (
  <section className='header-preview'>
    <div className='flex-container flex-column header-flex'>
      <div className='flex-item'>
        <h1 id='race-country'>{ raceLocation }</h1>
      </div>
      <div id='race-header' className='flex-item'>
        <h3 className='zero-margin light-text'>{ circuitName }</h3>
      </div>
      <div className='flex-item margin-basic'>
        <h3 className='zero-margin light-text'>{ racedate }</h3>
      </div>
    </div>

    <div className='flex-container header-bottom-flex'>
      <div className='flex-item bottom'>
        <img src='../src/images/down.svg' />
      </div>
    </div>
  </section>
)
