import { createStore, combineReducers } from 'redux';
import { loginReducer } from './reducers/loginReducer';

export const RootReducers = combineReducers({
    login: loginReducer,
});

export default createStore(RootReducers);
