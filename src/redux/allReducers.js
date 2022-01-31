import {combineReducers} from "redux";
import { productReducer } from "../components/products/reducer";
import {searchProductReducer} from "../components/header/reducer";

const allReducers = combineReducers({
    productReducer,
    searchProductReducer
});

export default allReducers;