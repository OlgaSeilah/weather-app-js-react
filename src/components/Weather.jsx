import {Fragment} from "react";
import {useSelector} from "react-redux";

const Weather = () => {

    const {country, city, pressure, sunset, temp} = useSelector(state => state.weather);
    const message = useSelector(state => state.message);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {country}, {city}</p>
                    <p>Temp: {temp}</p>
                    <p>Pressure: {pressure}</p>
                    <p>Sunset: {sunset}</p>
                </>
            }
            {message}
        </div>
    )

}

export default Weather;