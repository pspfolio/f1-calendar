import React from 'react'
import Race from '../Race/Race'

import './grandPrix.css'

const Grandprix = React.createClass({
  render () {
    const { grandprix } = this.props
    return (
      <div className="grandprix">
        <div className="result">
          <h2>Race result:</h2>
          {grandprix ? <Race results={grandprix.results} /> : <h2>Not Found</h2>}
        </div>
        <div className="result">
          <h2>Qualifying result:</h2>
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
