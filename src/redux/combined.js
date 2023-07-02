import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reducer from './reducer';

const rootReducer=combineReducers({
user:userReducer,
news:reducer


});

export default rootReducer;