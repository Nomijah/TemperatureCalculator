import React from "react";

// Temperature Display Component
const TemperatureDisplay = ({ celsius, fahrenheit, kelvin }) => {
  return (
    <div className="temperature-display">
      <h2 className="section-title">Temperature Breakdown</h2>
      <p className="temperature-value">
        <span className="value-label">Celsius:</span> {celsius}°C
      </p>
      <p className="temperature-value">
        <span className="value-label">Fahrenheit:</span> {fahrenheit}°F
      </p>
      <p className="temperature-value">
        <span className="value-label">Kelvin:</span> {kelvin}K
      </p>
    </div>
  );
};

export default TemperatureDisplay;
