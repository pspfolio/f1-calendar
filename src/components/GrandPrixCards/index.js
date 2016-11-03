import React from 'react'
import './GrandPrixCards.css'

const GPCard = ({data}) => (
  <div>
    <ul className='card-list'>
      {
        data.map((item) => {
          return <li key={item.round} className='card'>
            <div className='card-header'>
              <div className={item.circuit.Location.country + ' flag'}></div>
              <h3 className='card-title'>{item.raceName}</h3>
            </div>
            <div className='card-footer'>
              <span className='location'>
                <img src='../src/images/location.svg' className='icon' alt='f1 circuit location pointer' />
                {`
                  ${item.circuit.Location.locality},
                  ${item.circuit.Location.country}
                `}
              </span>
              <span className='pipe'>|</span>
              <span className='date'>
                <img src='../src/images/calendar.svg' className='icon' alt='f1 calendar raceday' />
                {item.date}
              </span>
              <span className='pipe'>|</span>
              <span className='race-status'>
                <img src='../src/images/checkeredflag.svg' className='icon' alt='f1 race status' />
                {
                  new Date(item.date) < new Date() ? 'Finished' : 'Upcoming'
                }
              </span>
            </div>
          </li>
        })
      }
    </ul>
  </div>
)

export default GPCard
