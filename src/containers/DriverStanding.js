import React from 'react'
import { connect } from 'react-redux'
import { fetchDriverStandingsIfNeeded } from '../actions'
import ChampDriverStandings from '../components/DriverStandings/'

const DriverStandings = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDriverStandingsIfNeeded())
  },

  render() {
    const { driverStandings } = this.props
    return(
      <ChampDriverStandings standings={driverStandings} />
    )
  }
})

function mapStateToProps(state) {
  console.log(state)
  return {
    driverStandings: state.standings.driverstandings
  }
}


const DS = connect(mapStateToProps)(DriverStandings)

export default DS
