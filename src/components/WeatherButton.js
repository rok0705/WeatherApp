import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const WeatherButton = ({ cities, setCity }) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "paris", value: "1" },
    { name: "new york", value: "2" },
    { name: "toronto", value: "3" },
    { name: "tokyo", value: "4" },
    { name: "seoul", value: "5" },
  ];

  return (
    <div className="container">
      <Button variant="primary" onClick={() => setCity("currentLocation")}>
        Current Location
      </Button>{" "}
      {cities.map((city, index) => (
        <Button variant="warning" key={index} onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
