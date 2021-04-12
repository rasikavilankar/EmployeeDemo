import rootReducer from './RootReducers';
import {createStore, combineReducers} from 'redux';
export let storePersist = createStore(rootReducer);
