import React from 'react'
import GrandPrixResults from '../GrandPrixResults'
import GrandPrixHeader from '../GrandPrixHeader'
import GrandPrixStat from '../GrandPrixStat'
import './grandPrix.css'

export default ({ raceResult, qualifyingResult, circuitName, headerImgPath, fastestLap, raceWinner }) => (
  <div className="grandprix">
    <GrandPrixHeader circuitName={circuitName} headerImgPath={headerImgPath} fastestLap={fastestLap} />

    <div className='stats-container'>
      <h2 className='gp-header'>STATS</h2>
      <div className='flex-container'>
        <GrandPrixStat header="Winner" text={raceWinner} icon="" />
        <GrandPrixStat header="Fastest lap" text={ fastestLap.Driver ? `${fastestLap.Driver.familyName } (${fastestLap.FastestLap.Time.time})` : null}/>
      </div>
    </div>

    <GrandPrixResults raceResult={raceResult} qualifyingResult={qualifyingResult} />
  </div>
)
