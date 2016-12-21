import React from 'react'
import GrandPrixResults from '../GrandPrixResults'
import GrandPrixHeader from '../GrandPrixHeader'
import GrandPrixStat from '../GrandPrixStat'
import './grandPrix.css'

export default ({ raceResult, qualifyingResult, circuitName, raceLocation, fastestLap, raceWinner, retiredDrivers}) => (
  <div className="grandprix">
    <GrandPrixHeader circuitName={circuitName} raceLocation={raceLocation} fastestLap={fastestLap} />

    <div className='stats-container'>
      <h2 className='gp-header'>STATS</h2>
      <div className='flex-container'>
        <GrandPrixStat header='Winner' icon='winner.svg' text={raceWinner} />
        <GrandPrixStat header='Num of retired' icon='cone.svg' text={retiredDrivers} />
        <GrandPrixStat header="Fastest lap" icon='fastestlap.svg' text={ fastestLap.Driver ? `${fastestLap.Driver.familyName } (${fastestLap.FastestLap.Time.time})` : null}/>
      </div>
    </div>

    <GrandPrixResults raceResult={raceResult} qualifyingResult={qualifyingResult} />
  </div>
)
