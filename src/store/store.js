import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loginReducer } from './reducers/loginReducer';

export const RootReducers = combineReducers({
    login: loginReducer,
});

export default createStore(RootReducers, composeWithDevTools());
