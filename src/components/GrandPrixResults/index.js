import React from 'react'
import ResultTable from '../ResultTable/ResultTable'
import Tabs from '../Tabs'
import Tab from '../Tab'
import './GrandPrixResults.css'

export default ({qualifyingResult, raceResult}) => (
<div className='ResultContainer'>
  <h2 className='gp-header'>Results</h2>
  <Tabs>
    <Tab name="Qualifying">
      <ResultTable
        headers={[
          {name: 'Pos.', path: 'position'},
          {name: 'Name', path: 'Driver.familyName'},
          {name: 'Constructor', path: 'Constructor.name'},
          {name: 'Q1', path: 'Q1'},
          {name: 'Q2', path: 'Q2'},
          {name: 'Q3', path: 'Q3'}
        ]}
        results={ qualifyingResult } />
    </Tab>
    <Tab name="Race">
      <ResultTable
        headers={[
          {name: 'Pos.', path: 'position'},
          {name: 'Name', path: 'Driver.familyName'},
          {name: 'Constructor', path: 'Constructor.name'},
          {name: 'Points', path: 'points'},
          {name: 'Status', path: 'status'}
        ]}
        results={ raceResult } />
    </Tab>
  </Tabs>
</div>
)
