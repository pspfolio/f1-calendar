import React from 'react'
import { connect } from 'react-redux'
import { fetchDriverStandingsIfNeeded } from '../actions'

const DriverStandings = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDriverStandingsIfNeeded())
  },

  render() {
    return(
      <h2>DriverStandings</h2>
    )
  }
})

function mapStateToProps(state) {
  return {
    driverstandings: state.driverstandings
  }
}


const DS = connect(mapStateToProps)(DriverStandings)

export default DS
