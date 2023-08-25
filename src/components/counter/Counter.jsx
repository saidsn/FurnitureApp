import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="container">
      <div className="counter">
        <div className="counter__item">
          <h2 className="counter__item--title">500+</h2>
          <p className="counter__item--text">PROJECTS</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">70+</h2>
          <p className="counter__item--text">PARTNERS</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">30K+</h2>
          <p className="counter__item--text">FOLLOWERS</p>
        </div>
        <div className="counter__item">
          <h2 className="counter__item--title">25+</h2>
          <p className="counter__item--text">YEARS</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
