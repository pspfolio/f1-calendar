import React from 'react'
import { connect } from 'react-redux'
import { fetchGrandPrixAndQualifyingResults } from '../actions'
import GrandPrix from '../components/GrandPrix/GrandPrix'

const GrandprixApp = React.createClass({

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
    const { grandprix } = this.props;
    return(
      <GrandPrix grandprix={grandprix} />
    )
  }
})

const getGrandprix = (grandprixs, round) => {
  var result = grandprixs.filter((gp) => gp.round === round);
  return result[0];
}

function mapStateToProps(state, ownProps) {
    return {
        grandprix: getGrandprix(state.grandprixs, ownProps.params.raceId)
    }
}

const GP = connect(mapStateToProps)(GrandprixApp);

export default GP;
