import React from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${Math.round(
        response.data.temperature.current
      )} °C`
    );
    // console.log(response);
  }
  const apiKey = "b1ffa750faa242739962f64fe0t9dod4";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Oval
      height={80}
      width={80}
      color="blue"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="white"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
