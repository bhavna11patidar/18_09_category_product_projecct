import {combineReducers} from 'redux';
import authReducer from './Redux/auth/AuthReducer';
export default combineReducers({
    auth:authReducer,
});