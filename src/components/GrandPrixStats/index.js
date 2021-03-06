import React from 'react'
import GrandPrixStat from '../GrandPrixStat'

export default ({ raceWinner, retiredDrivers, fastestLap }) => (
  <section className='stats-container'>
    <h2 className='gp-header'>Stats</h2>
    <div className='flex-container'>
      <GrandPrixStat header='Winner' icon='winner.svg' text={raceWinner} />
      <GrandPrixStat header="Fastest lap (race)" icon='fastestlap.svg' text={ fastestLap.Driver ? `${fastestLap.Driver.familyName } (${fastestLap.FastestLap.Time.time})` : null}/>
      <GrandPrixStat header='Num of retired drivers' icon='cone.svg' text={retiredDrivers} />
    </div>
  </section>
)
