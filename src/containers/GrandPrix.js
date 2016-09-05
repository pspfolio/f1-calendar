import { connect } from 'react-redux';
import GrandPrix from '../components/GrandPrix/GrandPrix';

const getGrandprix = (grandprixs, location) => {
  var result = grandprixs.filter((gp) => gp.name.toLowerCase() === location.toLowerCase());
  return result[0];
}

function mapStateToProps(state, ownProps) {
    return {
        grandprix: getGrandprix(state.grandprixs, ownProps.params.name)
    }
}

const GP = connect(mapStateToProps)(GrandPrix);

export default GP;
