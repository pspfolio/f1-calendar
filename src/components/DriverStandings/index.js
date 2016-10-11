import React from 'react'
import DriverStanding from '../DriverStanding'

const ChampionshipDriverStandings = ({ standings }) => (
  <div className="driverChampionships">
  <h3>Driver standings</h3>
    <ul>
      {standings.map((standing, id) => {
        return <DriverStanding key={id} standing={standing} />
      })}
    </ul>
  </div>
)

export default ChampionshipDriverStandings
