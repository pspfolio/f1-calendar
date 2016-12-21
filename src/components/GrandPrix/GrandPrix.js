import React from 'react'
import GrandPrixResults from '../GrandPrixResults'
import GrandPrixHeader from '../GrandPrixHeader'
import GrandPrixStats from '../GrandPrixStats'
import './grandPrix.css'

export default ({ raceResult, qualifyingResult, circuitName, raceLocation, fastestLap, raceWinner, retiredDrivers}) => (
  <div className="grandprix">
    <GrandPrixHeader circuitName={circuitName} raceLocation={raceLocation} fastestLap={fastestLap} />
    <GrandPrixStats raceWinner={raceWinner} retiredDrivers={retiredDrivers} fastestLap={fastestLap} />
    <GrandPrixResults raceResult={raceResult} qualifyingResult={qualifyingResult} />
  </div>
)
