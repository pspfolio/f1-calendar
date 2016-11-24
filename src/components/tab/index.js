import React from 'react'
import './tab.css'

const Tab = ({handleClick, active, text}) => (
  <div onClick={handleClick} className={`tab ${text.toLowerCase()} ${active ? 'active' : ''}`}>
    {text}
  </div>
)

export default Tab;
