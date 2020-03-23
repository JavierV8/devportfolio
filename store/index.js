import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
//reducer
import authReducer from './reducers/Auth';

const rootReducer = combineReducers({
  auth: authReducer,
});
export const initStore = (initialState = {}) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};