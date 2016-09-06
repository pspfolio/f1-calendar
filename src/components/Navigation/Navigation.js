import React from 'react'
import { Link } from 'react-router'
import './navigation.css'

const Navigation = ({ name, raceId, time, active }) => (
  <Link to={`/grandprix/${raceId}/${name}`}>
    <div className={active ? 'nav-item active' : 'nav-item'}>
        <p className="grandprix-name">{name}</p>
        <time className="grandprix-time">{time}</time>
    </div>
  </Link>
)

export default Navigation;
