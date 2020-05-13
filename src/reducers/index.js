import { combineReducers } from 'redux';
import carts from './cart.reducer'
import lists from './list.reducer'

export default combineReducers({
    carts,
    lists,
})