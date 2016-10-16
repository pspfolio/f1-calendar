import React from 'react'
import Standing from '../Standing'
import './DriverStandings.css'

const ChampionshipDriverStandings = ({ standings }) => (
  <div className="driverChampionships">
  <h3>Driver standings</h3>
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
