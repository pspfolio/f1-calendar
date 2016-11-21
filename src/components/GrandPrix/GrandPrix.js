import React from 'react'
import ResultTable from '../ResultTable/ResultTable'
import GoogleMaps from '../GoogleMap'

import './grandPrix.css'

const Grandprix = React.createClass({
  getInitialState() {
    return {
      resultRace: true
    }
  },

  render () {
    const { grandprix } = this.props
    return (
      <div className="grandprix">
        <div className="result">
          <h2>Race result:</h2>
          {grandprix && this.state.resultRace ?
            <ResultTable
              headers={[
                {name: 'Pos.', path: 'position'},
                {name: 'Name', path: 'Driver.familyName'},
                {name: 'Constructor', path: 'Constructor.name'},
                {name: 'Points', path: 'points'},
                {name: 'Status', path: 'status'}
              ]}
              results={ grandprix.results } />
            : <h2>Not Found</h2> }
        </div>
        <div className="result">
          <h2>Qualifying result:</h2>
          {grandprix && grandprix.qualifying && !this.state.resultRace ?
            <ResultTable
              headers={[
                {name: 'Pos.', path: 'position'},
                {name: 'Name', path: 'Driver.familyName'},
                {name: 'Constructor', path: 'Constructor.name'},
                {name: 'Q1', path: 'Q1'},
                {name: 'Q2', path: 'Q2'},
                {name: 'Q3', path: 'Q3'}
              ]}
              results={ grandprix.qualifying.results } />
            : <h2>Not Found</h2> }
        </div>
        <div className="winner">
          <h2>Race winner:</h2>
          {grandprix ? <p>{grandprix.results[0].Driver.familyName}</p> : null}
        </div>
      </div>
    )
  }
})

export default Grandprix;
