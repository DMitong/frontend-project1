import React from "react";

const TabSelector = ({ tab, onTabChange }) => {
  return (
    <div className="tab-buttons">
      <button
        className={`tab-btn ${tab === "all" ? "active" : ""}`}
        onClick={() => onTabChange("all")}
      >
        All
      </button>

      <button
        className={`tab-btn ${tab === "completed" ? "active" : ""}`}
        onClick={() => onTabChange("completed")}
      >
        Completed
      </button>

      <button
        className={`tab-btn ${tab === "uncompleted" ? "active" : ""}`}
        onClick={() => onTabChange("uncompleted")}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default TabSelector;
