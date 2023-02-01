import React from "react";

import { GameHeader } from "../components/GameHeader";
import { GameGrid } from "../components/GameGrid";
import { SupportSection } from "../components/SupportSection";

export const HomePage = () => {
  return (
    <>
      <GameHeader />
      <GameGrid />
      <SupportSection />
    </>
  );
};
