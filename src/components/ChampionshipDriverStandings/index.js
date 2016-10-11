import React from 'react'

const ChampionshipDriverStandings = ({ standings }) => (
  <div className="driverChampionships">
  <h3>Driver standings</h3>
    <ul>
      {standings.map((standing) => {
        return <li key={standing.Driver.driverId}>{standing.position} {standing.Driver.familyName} {standing.points}</li>
      })}
    </ul>
  </div>
)

export default ChampionshipDriverStandings
