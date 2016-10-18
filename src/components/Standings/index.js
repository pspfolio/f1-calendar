import React from 'react'
import Standing from '../Standing'
import './DriverStandings.css'

const ChampionshipDriverStandings = ({ standings, handleStandingChange, showDrivers }) => (
  <div className='driverChampionships'>
    <div onClick={handleStandingChange} className='championshipHeader'>
      <h3>{showDrivers ? 'Driver standings' : 'Constructor standings'}</h3>
      <img src='src/images/ArrowDown.svg' alt='arrow down'></img>
    </div>
    <ul>
      {standings.map((standing, id) => {
        return <Standing
          key={id}
          position={standing.position}
          name={standing.name}
          points={standing.points}
          constructId={standing.constructorId}/>
      })}
    </ul>
  </div>
)

export default ChampionshipDriverStandings
