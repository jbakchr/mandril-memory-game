import React from "react";

import bmc from "../assets/bmc-button.png";

export const SupportSection = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "125px",
        marginTop: "10px",
      }}
    >
      <p
        style={{
          fontFamily: "Lobster",
          fontSize: "28px",
          color: "#03a359",
          textShadow: "3px 3px 2px black",
        }}
      >
        Støt dette awesome projekt her
      </p>
      <a
        href="http://buymeacoffee.com/jbakchr"
        target="_blank"
        rel="noreferrer"
      >
        <img style={{ width: "200px" }} src={bmc} alt="buy me a coffee" />
      </a>
    </div>
  );
};
