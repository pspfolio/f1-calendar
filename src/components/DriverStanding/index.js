import React from 'react'

const DriverStanding = ({ standing }) => (
  <li className={standing.Constructors[0].constructorId} key={standing.Driver.driverId}>
      <span>{standing.position}</span>
      <span>{standing.Driver.familyName}</span>
      <span>{standing.points}</span>
  </li>
)

export default DriverStanding
