import { combineReducers } from 'redux';
import navigation from './navigation';
import grandprixs from './grandprix';

export default combineReducers({
    grandprixs,
    navigation
});
