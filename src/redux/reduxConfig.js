import { combineReducers, createStore } from "redux";

import conterReducer from "./ducks/counterReducer";

const reducer = combineReducers({
  counter: conterReducer
});

const store = createStore(reducer);

export default store;
