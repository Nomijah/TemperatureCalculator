import React from "react";

// Temperature Input Component
const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  const labels = {
    c: "Celsius",
    f: "Fahrenheit",
    k: "Kelvin",
  };

  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div className="input-group">
      <label className="input-label">Temperature in {labels[scale]}:</label>
      <input
        className="input-field"
        type="number"
        value={temperature}
        onChange={handleChange}
        placeholder={`Enter temperature in ${labels[scale]}`}
      />
    </div>
  );
};
export default TemperatureInput;
