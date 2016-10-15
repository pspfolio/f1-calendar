import React from 'react'
import './Standing.css'

const Standing = ({ position, name, points, constructId }) => (
  <li className={constructId + ' driver'} key={position}>
      <div className='position'>{position}</div>
      <div className='name'>{name}</div>
      <div className='points'>{points}</div>
  </li>
)

export default Standing
