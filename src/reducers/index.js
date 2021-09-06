import { combineReducers } from 'redux';
import gamesReducer from "./gameReducers"; 
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    games:gamesReducer,
    detail:detailReducer,

});
export default rootReducer;