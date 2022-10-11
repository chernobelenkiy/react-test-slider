import React, { useState, useRef } from "react";
import classnames from "classnames";

export const Slider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(0);

  const cloneChild = (child, index) => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child, {
      active: current === index,
    });
  };

  const handleLeft = () => {
    const next = Math.max(0, current - 1);

    if (next !== current) {
      // setCurrent(next);
      sliderRef.current++;
    }
  };

  const handleRight = () => {
    const next = Math.min(current + 1, React.Children.count(children) - 1);

    if (next !== current) {
      // setCurrent(next);
      sliderRef.current++;
    }
  };

  console.log(sliderRef);
  

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <div className={"slider"}>
        <div style={{ marginRight: "auto", zIndex: 10 }} onClick={handleLeft}>
          left
        </div>
        <div className="inner" >
          {React.Children.map(children, cloneChild)}
        </div>
        <div style={{ marginLeft: "auto", zIndex: 10 }} onClick={handleRight}>
          right
        </div>
      </div>
      <input type="text" onBlur={() => console.log(sliderRef.current)} />
    </div>
  );
};

export const Slide = ({ children, className }) => {
  return (
    <div
      style={{ border: "1px solid black" }}
      className={classnames("slide", className)}
    >
      {children}
    </div>
  );
};

export const ImageSlider = () => {
  return (
    <Slider>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
      <Slide>Slide 5</Slide>
    </Slider>
  );
};
