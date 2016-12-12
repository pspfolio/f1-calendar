import React from 'react'
import './GrandPrixStat.css'

export default ({ header, text, icon }) => (
  <div className='flex-item stat-item'>
    <h3>{header}</h3>
    <p>{text}</p>
  </div>
)
