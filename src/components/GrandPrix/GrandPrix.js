import React from 'react'
import ResultTable from '../ResultTable/ResultTable'
import Tabs from '../Tabs'
import Tab from '../Tab'
import './grandPrix.css'

const Grandprix = React.createClass({
  render () {
    const { raceResult, qualifyingResult } = this.props
    return (
      <div className="grandprix">
        <div className="winner">
          <h2>Race winner:</h2>
          {raceResult.length > 0 ? <p>{raceResult[0].Driver.familyName}</p> : null}
        </div>
        <h1 className="results">Results</h1>
        <Tabs>
          <Tab text="Qualifying">
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
          <Tab text="Race">
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
  }
})

export default Grandprix;
