import React from "react";
import counter from "../../assets/loader.gif";

const Countdown = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform:'translate(-50%,-50%)',
        height: "300px",
        width: "300px",
      }}
    >
      <img style={{ height: "100%", width: "100%" }} src={counter}></img>
    </div>
  );
};

export default Countdown;
