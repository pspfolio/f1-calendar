import React from 'react'
import Standing from '../Standing'
import './DriverStandings.css'

const ChampionshipDriverStandings = ({ standings, handleStandingChange }) => (
  <div className='driverChampionships'>
    <div onClick={handleStandingChange} className='championshipHeader'>
      <h3>Driver standings</h3>
      <img src='src/images/ArrowDown.svg' alt='arrow down'></img>
    </div>
    <ul>
      {standings.map((standing, id) => {
        return <Standing
          key={id}
          position={standing.position}
          name={`${standing.Driver.givenName} ${standing.Driver.familyName}`}
          points={standing.points}
          constructId={standing.Constructors.slice(-1).pop().constructorId}/>
      })}
    </ul>
  </div>
)

export default ChampionshipDriverStandings
