import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "./allReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );

const reduxStore = createStore(allReducers, enhancer);

export default reduxStore;