import React from "react";
import counter from "../../assets/loader.gif";
import rocket from "../../assets/rocket.gif";

const Countdown = ({ showRocket = false }) => {
  return (
    <div
      style={
        showRocket
          ? {
              height: "300px",
              width: "300px",
              position:'relative'
            }
          : {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              height: "300px",
              width: "300px",
            }
      }
    >
      <img style={{ height: "100%", width: "100%" }} src={counter}></img>
      {showRocket && (
        <img
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={rocket}
        ></img>
      )}
    </div>
  );
};

export default Countdown;
