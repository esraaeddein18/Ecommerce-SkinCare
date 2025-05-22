import React from "react";
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner-border text-success loader-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
