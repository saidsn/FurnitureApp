import React from "react";
import "./Hamburger.scss";

const Hamburger = ({open, setOpen}) => {

  
  return (
    <div className="hamburger">
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="plates">
        <div className={`plate plate3  ${open ? "active" : ""}`}  onClick={() => setOpen(!open)}>
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path
              className="line line1"
              d="M 50,35 H 30 C 6.9919512,35 5.5084746,123.72881 5.5084746,123.72881"
            />
            <path
              className="line line2"
              d="M 50,35 H 70 C 98.006349,35 92.796611,119.91525 92.796611,119.91525"
            />
            <path
              className="line line3"
              d="M 50,50 H 30 C 8.2796577,50 5.9322035,138.1356 5.9322035,138.1356"
            />
            <path
              className="line line4"
              d="M 50,50 H 70 C 91.152643,50 91.949152,133.21754 91.949152,133.21754"
            />
            <path
              className="line line5"
              d="M 50,65 C 50,65 47.570314,65 30,65 C 4.9857853,65 9.3220337,147.88136 9.3220337,147.88136"
            />
            <path
              className="line line6"
              d="M 50,65 H 70 C 91.937316,65 88.559322,144.91525 88.559322,144.91525"
            />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
