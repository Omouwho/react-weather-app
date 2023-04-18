import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loadedApiResponse, setLoadedApiResponse] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function showWeatherData(response) {
    setLoadedApiResponse(true);
    setWeatherData({
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b1ffa750faa242739962f64fe0t9dod4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loadedApiResponse) {
    return (
      <div className="Search">
        {form}
        <h2 style={{ textTransform: "capitalize" }}>{city}</h2>
        <ul className="list">
          <li>Temperature: {weatherData.temp}</li>
          <li>Description: {weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind}km/h</li>
          <li>
            <img src={weatherData.icon} alt={weatherData.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}


// import React from "react";
// import axios from "axios";
// import { Oval } from "react-loader-spinner";

// export default function Weather(props) {
//   function handleResponse(response) {
//     alert(
//       `The weather in ${response.data.city} is ${Math.round(
//         response.data.temperature.current
//       )} °C`
//     );
//     // console.log(response);
//   }
//   const apiKey = "b1ffa750faa242739962f64fe0t9dod4";
//   const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

//   axios.get(apiUrl).then(handleResponse);

//   return (
//     <Oval
//       height={80}
//       width={80}
//       color="blue"
//       wrapperStyle={{}}
//       wrapperClass=""
//       visible={true}
//       ariaLabel="oval-loading"
//       secondaryColor="red"
//       strokeWidth={2}
//       strokeWidthSecondary={2}
//     />
//   );
// }
