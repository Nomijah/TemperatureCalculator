import React from "react";

// Temperature History Component
const TemperatureHistory = ({ history, onClearHistory }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h2 className="section-title">Conversion History</h2>
        <button onClick={onClearHistory} className="button delete-button">
          Clear History
        </button>
      </div>
      <div className="history-list">
        <ul>
          {history.map((entry, index) => (
            <li key={index} className="history-item">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TemperatureHistory;
