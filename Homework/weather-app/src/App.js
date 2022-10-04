import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [cityname, setCityname] = useState("Jyväskylä")
  const [weather, setWeather] = useState(null);

  const API_KEY = 'c59ff511240b68cb67f79ce98f9a17f7';
  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const ICON_URL = 'http://openweathermap.org/img/wn/';


  const getWeather = async () => {
    const { data } = await axios(URL + cityname + '&appid=' + API_KEY + '&units=metric');
    setWeather(data);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className='App'>
      <h1>React Weather Application</h1>
      <p>
        This application will fetch a weather forecast from the OpenWeather.
        Just type city name and click Get Forecast button!
      </p>
      <form>
        <TextField label="Cityname"
          defaultValue="Jyväskylä"
          id="outlined-basic"
          onChange={(e) => setCityname(e.target.value)}
        />
        <Button variant="contained"
          color="primary"
          size="small"
          onClick={getWeather}
        >
          Get Forecast
        </Button>
      </form>
      <h2>Loaded weather forecast</h2>
      {weather !== null
        ? <div>
          City: {weather.name}<br />
          Main: {weather.weather[0].main}<br />
          Temp: {weather.main.temp} °C<br />
          Feels: {weather.main.feels_like} °C<br />
          Min-Max: {weather.main.temp_min} - {weather.main.temp_max} °C<br />
          <img
            alt={cityname}
            style={{ height: 100, width: 100 }}
            src={ICON_URL + weather.weather[0].icon + '.png'} />
        </div>

        : <p>-</p>
        
      }


    </div>
  );
}

export default App;
