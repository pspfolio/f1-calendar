import React from 'react'
import { Link } from 'react-router'
import './navigation.css'

const Navigation = ({ name, raceId, time, active }) => (
  <Link className={active ? 'nav-item active' : 'nav-item'}to={`/grandprix/${raceId}/${name}`}>
    <p className="grandprix-name">{name}</p>
    <time className="grandprix-time">{time}</time>
  </Link>
)

export default Navigation;
