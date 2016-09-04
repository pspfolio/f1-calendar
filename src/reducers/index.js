import { combineReducers } from 'redux';
import navigation from './navigation';
import grandprix from './grandprix';

export default combineReducers({
    grandprix,
    navigation
});
