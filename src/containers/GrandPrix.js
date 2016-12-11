import React from 'react'
import { connect } from 'react-redux'
import { fetchGrandPrixAndQualifyingResults } from '../actions'
import GrandPrix from '../components/GrandPrix/GrandPrix'

const GrandprixContainer = React.createClass({

  componentDidMount() {
    const { raceId } = this.props.params
    this.getData(raceId)
  },

  componentWillReceiveProps(props) {
    const { raceId } = props.params
    this.getData(raceId)
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
  const result = grandprixs.filter((gp) => gp.round === round);
  return result[0];
}

function mapStateToProps(state, ownProps) {
    const gp = getGrandprix(state.grandprixs, ownProps.params.raceId)
    const result = {
        raceResult: gp ? gp.results : [],
        qualifyingResult: gp && gp.qualifying ? gp.qualifying.results : [],
        name: gp ? gp.name : '',
        circuitName: gp ? gp.circuit.circuitName : '',
        headerImgPath: gp ? `${gp.circuit.Location.country}.jpg` : ''

    }
    return result;
}

const GP = connect(mapStateToProps)(GrandprixContainer);

export default GP;
