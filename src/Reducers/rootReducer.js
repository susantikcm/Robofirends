import { combineReducers } from 'redux';

import { searchRobots, requestRobots } from './robotReducer';
//import { searchHumans, requestHumans } from './humanActions';

export default combineReducers({
    searchRobots,
    requestRobots,
    //searchHumans,
    //requestHumans
});