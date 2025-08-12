import {api_key, base_url} from "../utils/constants.js";

export const SHOW_WEATHER = 'SHOW_WEATHER';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';


export const showWeather = (data) => ({
    type: SHOW_WEATHER,
    payload: data
})

export const showMessage = (text) => ({
    type: SHOW_ERROR_MESSAGE,
    payload: text
})

export const fetchWeather = (city) => {
    return dispatch => {
        dispatch(showMessage(""))
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(showWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }))
            })
            .catch(e => {
                console.log(e)
                dispatch(showMessage("failed to fetch weather"))
            })
    }
}