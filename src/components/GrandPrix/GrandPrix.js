import React from 'react'
import ResultTable from '../ResultTable/ResultTable'

import './grandPrix.css'

const Grandprix = React.createClass({
  render () {
    const { grandprix } = this.props

    let gp;
    let winner;
    if (grandprix) {
      gp = (
        <ResultTable
          headers={[
            {name: 'Pos.', path: 'position'},
            {name: 'Name', path: 'Driver.familyName'},
            {name: 'Constructor', path: 'Constructor.name'},
            {name: 'Points', path: 'points'},
            {name: 'Status', path: 'status'}
          ]}
          results={grandprix.results}
        />
      )

      winner = <p>{grandprix.results[0].Driver.familyName}</p>

    } else {
      gp = <h2>Not found</h2>
      winner = <p>-</p>
    }

    return (
      <div className="grandprix">
        <div className="result">
          <h2>Race result:</h2>
          {gp}
        </div>
        <div className="result">
          <h2>Qualifying result:</h2>
          {gp}
        </div>
        <div className="winner">
          <h2>Race winner:</h2>
          {winner}
        </div>
      </div>
    )
  }
})

export default Grandprix;
