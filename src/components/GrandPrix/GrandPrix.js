import React from 'react'
import GrandPrixResults from '../GrandPrixResults'
import GrandPrixHeader from '../GrandPrixHeader'
import GrandPrixStats from '../GrandPrixStats'
import GrandPrixMap from '../GrandPrixMap'
import './grandPrix.css'

export default ({ raceResult, qualifyingResult, circuitName, raceLocation, fastestLap, raceWinner, retiredDrivers, date }) => (
  <div className="grandprix">
    <GrandPrixHeader racedate={date} circuitName={circuitName} raceLocation={raceLocation} fastestLap={fastestLap} />
    <GrandPrixMap />
    <GrandPrixStats raceWinner={raceWinner} retiredDrivers={retiredDrivers} fastestLap={fastestLap} />
    <GrandPrixResults raceResult={raceResult} qualifyingResult={qualifyingResult} />
  </div>
)
