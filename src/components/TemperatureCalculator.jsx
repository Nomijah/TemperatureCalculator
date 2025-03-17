import React, { useState } from "react";
import TemperatureDisplay from "./calculatorComponents/TemperatureDisplay";
import TemperatureHistory from "./calculatorComponents/TemperatureHistory";
import TemperatureInput from "./calculatorComponents/TemperatureInput";
import ScaleSelector from "./calculatorComponents/ScaleSelector";

// Main Calculator Component
const TemperatureCalculator = () => {
  const [scale, setScale] = useState("c");
  const [temperature, setTemperature] = useState("");
  const [history, setHistory] = useState([]);

  // Conversion functions
  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const toKelvin = (celsius) => celsius + 273.15;
  const fromKelvin = (kelvin) => kelvin - 273.15;

  // Calculate temperatures based on current scale and input
  let celsius, fahrenheit, kelvin;

  if (temperature !== "" && !isNaN(temperature)) {
    if (scale === "c") {
      celsius = parseFloat(temperature);
      fahrenheit = toFahrenheit(celsius);
      kelvin = toKelvin(celsius);
    } else if (scale === "f") {
      fahrenheit = parseFloat(temperature);
      celsius = toCelsius(fahrenheit);
      kelvin = toKelvin(celsius);
    } else {
      kelvin = parseFloat(temperature);
      celsius = fromKelvin(kelvin);
      fahrenheit = toFahrenheit(celsius);
    }

    // Round to 2 decimal places
    celsius = Math.round(celsius * 100) / 100;
    fahrenheit = Math.round(fahrenheit * 100) / 100;
    kelvin = Math.round(kelvin * 100) / 100;
  } else {
    celsius = "";
    fahrenheit = "";
    kelvin = "";
  }

  const handleScaleChange = (e) => {
    setScale(e.target.value);
    setTemperature("");
  };

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  const handleAddToHistory = () => {
    if (temperature !== "" && !isNaN(temperature)) {
      const entry = `${temperature}° ${scale.toUpperCase()} = ${celsius}°C = ${fahrenheit}°F = ${kelvin}K`;
      setHistory([entry, ...history]);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="calculator-container">
      <h1 className="app-title">Temperature Converter</h1>

      <ScaleSelector scale={scale} handleScaleChange={handleScaleChange} />

      <TemperatureInput
        scale={scale}
        temperature={temperature}
        onTemperatureChange={handleTemperatureChange}
      />

      <button
        onClick={handleAddToHistory}
        disabled={temperature === "" || isNaN(temperature)}
        className={`button primary-button ${
          temperature === "" || isNaN(temperature) ? "button-disabled" : ""
        }`}
      >
        Save Conversion
      </button>

      {temperature !== "" && !isNaN(temperature) && (
        <TemperatureDisplay
          celsius={celsius}
          fahrenheit={fahrenheit}
          kelvin={kelvin}
        />
      )}

      <TemperatureHistory
        history={history}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
};

export default TemperatureCalculator;
