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

  handleQualifyingClick() {
    this.setState({resultRace: false})
  },

  handleRaceClick() {
    this.setState({resultRace: true})
  },

  render () {
    const { grandprix } = this.props
    return (
      <div className="grandprix">
        <div className="winner">
          <h2>Race winner:</h2>
          {grandprix ? <p>{grandprix.results[0].Driver.familyName}</p> : null}
        </div>
        <h1 className="results">Results</h1>
        <div className="tabs">
          <div className="tab-results">
            <div onClick={this.handleQualifyingClick} className={'tab qualifying ' + (!this.state.resultRace ? 'active' : '')}>
              Qualifying
            </div>
            <div onClick={this.handleRaceClick} className={'tab race ' + (this.state.resultRace ? 'active' : '')}>
              Race
            </div>
          </div>
        </div>

        <div className="result-tables">
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
            : null }

            {grandprix && !this.state.resultRace ?
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
              : null }
        </div>
      </div>
    )
  }
})

export default Grandprix;
