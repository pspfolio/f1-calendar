import React from 'react'
import { connect } from 'react-redux'
import { fetchGrandPrixAndQualifyingResults } from '../actions'
import GrandPrix from '../components/GrandPrix/GrandPrix'

const GrandprixContainer = React.createClass({

  componentDidMount() {
    const { raceId } = this.props.params
    this.getData(raceId)
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.raceId !== this.props.params.raceId) {
      this.getData(nextProps.params.raceId)
    }
  },

  getData(id) {
    const { dispatch } = this.props
    dispatch(fetchGrandPrixAndQualifyingResults(id))
  },

  render () {
    return(
      <GrandPrix {...this.props} />
    )
  }
})

const getGrandprix = (grandprixs, round) => {
  const result = grandprixs.filter((gp) => gp.round === round)[0];
  return result;
}

const getFastestLap = (gp) => {
  const result = gp.results.filter((result) => { return result.FastestLap && result.FastestLap.rank === '1' })[0]
  return result
}

const getWinnerName = (gp) => {
  const winner = gp.results[0].Driver
  return `${winner.givenName} ${winner.familyName}`
}

function mapStateToProps(state, ownProps) {
    const gp = getGrandprix(state.grandprixs, ownProps.params.raceId)
    const result = {
        raceResult: gp ? gp.results : [],
        qualifyingResult: gp && gp.qualifying ? gp.qualifying.results : [],
        name: gp ? gp.name : '',
        circuitName: gp ? gp.circuit.circuitName : '',
        headerImgPath: gp ? `${gp.circuit.Location.country}.jpg` : '',
        fastestLap: gp ? getFastestLap(gp) : {},
        raceWinner: gp ? getWinnerName(gp) : ''
    }

    return result;
}

const GP = connect(mapStateToProps)(GrandprixContainer);

export default GP;
