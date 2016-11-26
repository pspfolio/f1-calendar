import React from 'react'
import ResultTable from '../ResultTable/ResultTable'
import GoogleMaps from '../GoogleMap'
import Tabs from '../Tabs'
import './grandPrix.css'

const Grandprix = React.createClass({
  getInitialState() {
    return {
      activeIndex: 0,
      tabs: [
        {
          index: 0,
          name: 'Qualifying',
          handleClick: this.handleQualifyingClick
        },
        {
          index: 1,
          name: 'Race',
          handleClick: this.handleRaceClick
        }
      ]
    }
  },

  handleQualifyingClick() {
    this.setState({activeIndex: 0})
  },

  handleRaceClick() {
    this.setState({activeIndex: 1})
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
        <Tabs tabs={this.state.tabs} activeIndex={this.state.activeIndex} />
        <div className="result-tables">
          {grandprix && !this.state.activeIndex ?
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

            {grandprix && this.state.activeIndex ?
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
