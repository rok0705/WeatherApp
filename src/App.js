import { useEffect, useState } from "react";
import "./App.css";
import MainWeatherBox from "./components/MainWeatherBox";
import WeatherButton from "./components/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

// roadmap
// 1) display UI
// 2) add logic and API call
//
// 1. on app start, based on current location, display weather info.
//  a. city name
//  b. celcius and fahrenheit
//  c. weather status
//
// 2. display 5 buttons.
// a. current location
// b. hanoi
// c. paris
// d. new york
// e. seoul
//
// 3. on city button click, display that city weather info on main.
//
// 4. while fetching data, display loading spinner.

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = ["paris", "new york", "toronto", "tokyo", "seoul"];

  const getWeatherByCurrLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4326c816b10aa042bcdac66c2f8b6dfb&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log("data:", data);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getWeatherByCurrLocation();
    } else if (city == "currentLocation") {
      getWeatherByCurrLocation();
    } else {
      getWeatherByCity();
      // console.log("on city change:", city);
    }
  }, [city]);

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4326c816b10aa042bcdac66c2f8b6dfb&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      <ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!loading && <MainWeatherBox weather={weather}></MainWeatherBox>}
      <WeatherButton cities={cities} setCity={setCity}></WeatherButton>
    </div>
  );
}

export default App;
