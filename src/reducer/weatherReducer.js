import {SHOW_ERROR_MESSAGE, SHOW_WEATHER} from "../actions/weatherAction.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case SHOW_WEATHER:
            return {...state, weather: action.payload};
        case SHOW_ERROR_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state
    }
}