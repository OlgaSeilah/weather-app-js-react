import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer.js";
import logger from "redux-logger/src";
import {thunk} from "redux-thunk";

const initialState = {
    weather: {
        country: "GB",
        city: "Initial city",
        temp: 0.0,
        pressure: 1020,
        sunset: 1755026988,
    },
    message: "",
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(logger, thunk));