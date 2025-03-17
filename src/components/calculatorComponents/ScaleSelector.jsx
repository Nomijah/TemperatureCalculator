import React from "react";

const ScaleSelector = ({ scale, handleScaleChange }) => {
  return (
    <div className="scale-selector">
      <label className="input-label">Choose scale:</label>
      <div className="radio-group">
        <label className="radio-label">
          <input
            type="radio"
            value="c"
            checked={scale === "c"}
            onChange={handleScaleChange}
          />
          <span>Celsius</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="f"
            checked={scale === "f"}
            onChange={handleScaleChange}
          />
          <span>Fahrenheit</span>
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="k"
            checked={scale === "k"}
            onChange={handleScaleChange}
          />
          <span>Kelvin</span>
        </label>
      </div>
    </div>
  );
};

export default ScaleSelector;
