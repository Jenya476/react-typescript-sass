import {combineReducers} from 'redux';
import cartReducer from './cart.reducer';
import {Store} from '../models/store.model';


const rootReducer = combineReducers<Store>({
  cart: cartReducer
});

export default rootReducer;
