import React from 'react'
import { connect } from 'react-redux'
import GrandPrixCards from '../components/GrandPrixCards'

function initGrandPrixCardData(races) {
  var result = races.map((race) => {
    return {
      country: race.circuit.Location.country,
      locality: race.circuit.Location.locality,
      racename: race.raceName,
      date: race.date,
      round: race.round
    }
  })

  return result
}

function mapStateToProps(state) {
  return {
    data: initGrandPrixCardData(state.navigation)
  }
}

export default connect(mapStateToProps)(GrandPrixCards)
