import React from "react";

import { GameHeader } from "../components/GameHeader";
import { GameGrid } from "../components/GameGrid";

import bmc from "../assets/bmc-button.png";

export const HomePage = () => {
  return (
    <>
      <GameHeader />
      <GameGrid />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="http://buymeacoffee.com/jbakchr"
          target="_blank"
          rel="noreferrer"
        >
          <img style={{ width: "200px" }} src={bmc} alt="buy me a coffee" />
        </a>
      </div>
    </>
  );
};
