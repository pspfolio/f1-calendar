import React from 'react'
import { connect } from 'react-redux'
import { fetchDriverStandingsIfNeeded } from '../actions'
import ChampionshipDriverStandings from '../components/ChampionshipDriverStandings/'

const DriverStandings = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDriverStandingsIfNeeded())
  },

  render() {
    const { driverStandings } = this.props
    return(
      <ChampionshipDriverStandings standings={driverStandings} />
    )
  }
})

function mapStateToProps(state) {
  return {
    driverStandings: state.driverstandings
  }
}


const DS = connect(mapStateToProps)(DriverStandings)

export default DS
