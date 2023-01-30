import React from "react";
import { Container } from "@mui/material";

import { GameHeader } from "../components/GameHeader";
import { GameGrid } from "../components/GameGrid";

export const HomePage = () => {
  return (
    <Container maxWidth="md">
      <GameHeader />
      <GameGrid />
    </Container>
  );
};
