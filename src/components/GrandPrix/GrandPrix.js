import React from 'react'
import GrandPrixResults from '../GrandPrixResults'
import GrandPrixHeader from '../GrandPrixHeader'
import './grandPrix.css'

export default ({ raceResult, qualifyingResult, name }) => (
  <div className="grandprix">

    <GrandPrixHeader>
      <h1 id='race-name'>{ name }</h1>
    </GrandPrixHeader>
    <GrandPrixResults raceResult={raceResult} qualifyingResult={qualifyingResult} />
  </div>
)

/*
<div className="winner">
  <h2>Race winner:</h2>
  {raceResult.length > 0 ? <p>{raceResult[0].Driver.familyName}</p> : null}
</div>
*/
