import {combineReducers} from 'redux';
import authReducer from './Redux/auth/AuthReducer';
import categoryReducer from './Redux/category/CategoryReducer';
import productReducer from './Redux/product/ProductReducer';
export default combineReducers({
    auth:authReducer,
    categories:categoryReducer,
    products:productReducer,
});