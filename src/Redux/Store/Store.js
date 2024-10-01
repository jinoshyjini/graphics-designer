import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import Design from "../Reducer/Design";

const rootReducer = combineReducers({
  designData: Design,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
