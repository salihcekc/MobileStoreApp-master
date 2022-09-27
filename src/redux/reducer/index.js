import {combineReducers} from 'redux';
import AddItemReducer from './ItemReducers/AddItemReducer';

const rootReducer = combineReducers({
  AddItemReducer,
});

export default rootReducer;
