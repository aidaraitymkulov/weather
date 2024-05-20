import axios from "axios";
import { useState } from "react";

export const Home = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const handleClick = async () => {
        try {
            const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2a4d8719e4cbb06dfe9fafb13fc44a7&units=metric&lang=ru`);
            console.log(resp.data);
            setWeather(resp.data);
            setError('');
        } catch (err) {
            setError('Город не найден');
            setWeather(null);
        }
    };

    const handleInput = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="container">
            <div className="icons">
                <input id="input" type="text" onInput={handleInput} />
                <button id="btn" onClick={handleClick}>Показать погоду</button>
            </div>
            <div className="description" style={{ display: weather || error ? 'block' : 'none' }}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {weather && !error && (
                    <>
                        <h3>Город: {weather.name}</h3>
                        <p>Температура: {weather.main.temp > 0 ? '+' : '-'} {weather.main.temp}°C</p>
                        <p>Скорость ветра: {weather.wind.speed} м/с</p>
                        <p>Описание: {weather.weather[0].description}</p>
                    </>
                )}
            </div>
        </div>
    );
};
