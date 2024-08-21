import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";  // Corrected import
import productsReducer from "./slices/productsSlice";

const reducer = combineReducers({
    productsState: productsReducer,
});

const store = configureStore({
    reducer,
    middleware: [thunk],  // Correctly imported thunk is added to the middleware
});

export default store;
