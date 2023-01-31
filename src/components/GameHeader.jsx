import React from "react";

export const GameHeader = () => {
  return (
    <header
      style={{
        backgroundColor: "#fef200",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Lobster",
          fontSize: "40px",
          color: "#03a359",
          letterSpacing: "5px",
          textShadow: "3px 3px 2px black",
        }}
      >
        Mandril Huskespillet
      </h1>
    </header>
  );
};
