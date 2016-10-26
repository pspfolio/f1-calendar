import React from 'react'
import { connect } from 'react-redux'
import { fetchStandingsIfNeeded } from '../actions'
import Standings from '../components/Standings/'

const StandingContainer = React.createClass({
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchStandingsIfNeeded())
  },

  getInitialState() {
    return { driverStanding: true }
  },

  onStandingChange() {
    this.setState({ driverStanding: !this.state.driverStanding })
  },

  render() {
    const { drivers, constructors } = this.props
    return(
      <Standings
        showDrivers={this.state.driverStanding}
        standings={this.state.driverStanding ? drivers : constructors}
        handleStandingChange={this.onStandingChange} />
    )
  }
})

function initStanding(position, name, points, constructorId) {
  return {
    position,
    name,
    points,
    constructorId
  }
}

function initDrivers(driverStandings) {
  const drivers = driverStandings.map((standing) => {
    const name = `${standing.Driver.givenName} ${standing.Driver.familyName}`
    const constructorId = standing.Constructors.slice(-1).pop().constructorId
    return initStanding(standing.position, name, standing.points, constructorId)
  })

  return drivers
}

function initConstructors(constructorStandings) {
  const constructors = constructorStandings.map((standing) => {
    return initStanding(standing.position, standing.Constructor.name, standing.points, standing.Constructor.constructorId)
  })

  return constructors
}

function mapStateToProps(state) {
  const drivers = initDrivers(state.standings.driverStandings)
  const constructors = initConstructors(state.standings.constructorStandings)
  return {
    drivers,
    constructors
  }
}


const DS = connect(mapStateToProps)(StandingContainer)

export default DS
