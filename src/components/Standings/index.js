import React from 'react'
import Standing from '../Standing'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Standings.css'

const ChampionshipDriverStandings = ({ standings, handleStandingChange, showDrivers }) => (
  <div className='driverChampionships'>
    <div onClick={handleStandingChange} className='championshipHeader'>
      <h3>{showDrivers ? 'Driver standings' : 'Constructor standings'}</h3>
      <img src='src/images/ArrowDown.svg' alt='arrow down'></img>
    </div>
    <ReactCSSTransitionGroup
      component="ul"
      transitionName='fade'
      transitionEnterTimeout={300}
      transitionLeaveTimeout={10}>
        {standings.map((standing, id) => {
          return <Standing
            key={id + standing.points}
            position={standing.position}
            name={standing.name}
            points={standing.points}
            constructId={standing.constructorId}/>
        })}
    </ReactCSSTransitionGroup>
  </div>
)

export default ChampionshipDriverStandings
