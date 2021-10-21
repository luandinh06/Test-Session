import countryList from './countryList';
import totalResult from './totalResult';
import totalResultByTime from './totalResultByTime';


import { combineReducers } from 'redux';

const myReducer = combineReducers({
    countryList: countryList,
    totalResult: totalResult,
    totalResultByTime: totalResultByTime,
});

export default myReducer;
