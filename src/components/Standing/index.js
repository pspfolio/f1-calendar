import React from 'react'
import './Standing.css'

const Standing = ({ position, name, points, constructId }) => (
  <li className={'driver'} key={position}>
      <div className='position'>{position}</div>
      <div className='name'><span className={`${constructId} driverName`}>{name}</span></div>
      <div className='points'>{points}</div>
  </li>
)

export default Standing
