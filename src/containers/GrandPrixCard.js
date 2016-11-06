import React from 'react'
import { connect } from 'react-redux'
import { fetchCardsIfNeeded } from '../actions/'
import GrandPrixCards from '../components/GrandPrixCards'

const GrandPrixCardsContainer = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCardsIfNeeded())
  },

  render() {
    const { data } = this.props
    return(
        <GrandPrixCards data={data} />
    )
  }
})

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
    data: initGrandPrixCardData(state.cards)
  }
}

export default connect(mapStateToProps)(GrandPrixCardsContainer)
