import { connect } from 'react-redux';
import GrandPrix from '../components/GrandPrix/GrandPrix';

function mapStateToProps(state) {
    return {
        grandPrix: state.grandPrix
    }
}

const GP = connect(mapStateToProps)(GrandPrix);

export default GP;
